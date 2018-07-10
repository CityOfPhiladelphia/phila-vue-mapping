import axios from 'axios';

// import * as turf from '@turf/turf';
// import { point, polygon, distance, explode, nearest-point } from '@turf/turf';
// import distance from '@turf/turf';
// import {explode}'@turf/turf';
// import '@turf/nearest-point';
import { point, polygon } from '@turf/helpers';
import distance from '@turf/distance';
import '@turf/explode';
import '@turf/nearest-point';

import proj4 from 'proj4';
import * as L from 'leaflet';
import { query as Query } from 'esri-leaflet';
import BaseClient from './base-client';

class EsriClient extends BaseClient {
  fetch(feature, dataSource, dataSourceKey) {
    // console.log('esriclient fetch, feature:', feature, 'dataSource:', dataSource, 'dataSourceKey:', dataSourceKey);

    const url = dataSource.url;
    const { relationship, targetGeometry, ...options } = dataSource.options;
    const parameters = dataSource.parameters;
    if (parameters) {
      parameters['sourceValue'] = feature.properties[parameters.sourceField];
    }

    // check if a target geometry fn was specified. otherwise, use geocode feat
    let geom;
    if (targetGeometry) {
      const state = this.store.state;
      // pass leaflet to the targetgeom function so it can construct a custom
      // geometry (such as the lat lng bounds of a set of parcels) if it needs
      // to. use case: fetching regmaps.
      geom = targetGeometry(state, L);
    } else {
      geom = feature.geometry;
    }

    // handle null geom
    if (!geom) {
      this.dataManager.didFetchData(dataSourceKey, 'error');
      return;
    }

    this.fetchBySpatialQuery(dataSourceKey, url, relationship, geom, parameters, options);
  }

  fetchNearby(feature, dataSource, dataSourceKey) {
    // console.log('esri fetchNearby running, dataSource:', dataSource, 'dataSourceKey:', dataSourceKey);
    const projection4326 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
    const projection2272 = "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs";

    const dataSourceUrl = dataSource.url;
    const {
      calculateDistance,
      geometryServerUrl,
      distances,
      ...options
    } = dataSource.options;

    // console.log('distances:', distances)

    // params.geometries = `[${feature.geometry.coordinates.join(', ')}]`
    // TODO get some of these values from map, etc.
    const coords = feature.geometry.coordinates;
    const coords2272 = proj4(projection4326, projection2272, [coords[0], coords[1]]);
    // console.log('coords:', coords, 'coords2272:', coords2272);
    const params = {
      // geometries: feature => '[' + feature.geometry.coordinates[0] + ', ' + feature.geometry.coordinates[1] + ']',
      geometries: `[${coords2272.join(', ')}]`,
      inSR: 2272,
      outSR: 4326,
      bufferSR: 2272,
      distances: distances, //|| 0.0028,
      // inSR: 4326,
      // outSR: 4326,
      // bufferSR: 4326,
      // distances: distances, //|| 0.0028,
      unionResults: true,
      geodesic: false,
      f: 'json',
    };
    // console.log('esri nearby params', params);

    // get buffer polygon
    const bufferUrl = geometryServerUrl.replace(/\/$/, '') + '/buffer';
    // console.log('bufferUrl:', bufferUrl);

    axios.get(bufferUrl, { params }).then(response => {
      const data = response.data;
      // console.log('axios in esri fetchNearby is running, data:', data);

      // console.log('did get esri nearby buffer', data);

      const geoms = data.geometries || [];
      const geom = geoms[0] || {};
      const rings = geom.rings || [];
      const xyCoords = rings[0];

      // check for xy coords
      if (!xyCoords) {
        // we can't do anything without coords, so bail out
        this.dataManager.didFetchData(dataSourceKey, 'error');
        return;
      }

      const latLngCoords = xyCoords.map(xyCoord => [...xyCoord].reverse());

      // get nearby features using buffer
      const buffer = L.polygon(latLngCoords);
      const map = this.dataManager.store.state.map.map;

      // DEBUG
      // buffer.addTo(map);

      //this is a space holder
      const parameters = {};
      console.log('about to call fetchBySpatialQuery');
      this.fetchBySpatialQuery(dataSourceKey,
                               dataSourceUrl,
                               'within',
                               buffer,
                               parameters,
                               options,
                               calculateDistance ? coords : null
                              );
    }, response => {
      // console.log('did fetch esri nearby error', response);

      this.dataManager.didFetchData(dataSourceKey, 'error');
    });
  }

  fetchBySpatialQuery(dataSourceKey, url, relationship, targetGeom, parameters = {}, options = {}, calculateDistancePt) {
    console.log('fetch esri spatial query, dataSourceKey:', dataSourceKey, 'url:', url, 'relationship:', relationship, 'targetGeom:', targetGeom, 'parameters:', parameters, 'options:', options);

    let query;
    if (relationship === 'where') {
      query = Query({ url })[relationship](parameters.targetField + "='" + parameters.sourceValue + "'");
    } else {
      query = Query({ url })[relationship](targetGeom);
    }

    // apply options by chaining esri leaflet option methods
    const optionsKeys = Object.keys(options) || [];
    query = optionsKeys.reduce((acc, optionsKey) => {
      const optionsVal = options[optionsKey];
      let optionsMethod;

      try {
        acc = acc[optionsKey](optionsVal);
      } catch (e) {
        throw new Error(`esri-leaflet query task does not support option:
                         ${optionsKey}`);
      }

      return acc;
    }, query);

    query.run((error, featureCollection, response) => {
      console.log('did get esri spatial query', response, error);

      let features = (featureCollection || {}).features;
      const status = error ? 'error' : 'success';

      // calculate distance
      if (calculateDistancePt) {
        const from = point(calculateDistancePt);

        features = features.map(feature => {
          const featureCoords = feature.geometry.coordinates;
          let dist;
          if (Array.isArray(featureCoords[0])) {
            // console.log('featureCoords is array of coords:', featureCoords[0]);
            let polygon = polygon([featureCoords[0]]);
            const vertices = explode(polygon)
            const closestVertex = nearest(from, vertices);
            dist = distance(from, closestVertex, { units: 'miles' })
          } else {
            const to = point(featureCoords);
            dist = distance(from, to, { units: 'miles' });
          }

          // TODO make distance units an option. for now, just hard code to ft.
          const distFeet = parseInt(dist * 5280);
          // console.log('distFeet:', distFeet);

          feature._distance = distFeet;

          return feature;
        })
      }

      this.dataManager.didFetchData(dataSourceKey, status, features);
    });
  }

}

export default EsriClient;

/*
The DataManager is responsible for fetching external data (mainly API responses)
and storing them in state.

The router should own an instance of DataManager and make calls to it based on
navigation events.
*/
import * as L from 'leaflet';
import { query as Query } from 'esri-leaflet';
// import * as turf from '@turf/turf';
import { point, polygon } from '@turf/helpers';
import distance from '@turf/distance';
import area from '@turf/area';
import {
  GeocodeClient,
  HttpClient,
  EsriClient
} from './clients';

class DataManager {
  constructor(opts) {
    const store = this.store = opts.store;
    const config = this.config = opts.config;
    // this.eventBus = opts.eventBus;
    this.controller = opts.controller;

    // create clients
    this.clients = {};

    // REVIEW do these need the store any more? or can they just pass the
    // response back to this?
    const clientOpts = { config, store, dataManager: this };
    this.clients.geocode = new GeocodeClient(clientOpts);
    this.clients.http = new HttpClient(clientOpts);
    this.clients.esri = new EsriClient(clientOpts);
  }

  /* STATE HELPERS */

  // REVIEW maybe the getXXXParcelsById methods should just take an argument
  // activeParcelLayer? that's the only reason these are in here.

  activeTopicConfig() {
    const key = this.store.state.activeTopic;
    let config;

    // if no active topic, return null
    if (key) {
      config = this.config.topics.filter((topic) => {
        return topic.key === key;
      })[0];
    }

    return config || {};
  }
  //
  // activeParcelLayer() {
  //   return this.activeTopicConfig().parcels || this.config.map.defaultBasemap;
  // }

  /* ROUTING */

  // makeHash(address, topic) {
  //   let hash = `/${address}`;
  //   if (topic) {
  //     hash += `/${topic}`;
  //   }
  //   return hash;
  // }

  // arguably this would be better off in Router, but that would create a
  // circular ref router => datamanager => router. trying this for now.
  // routeToAddress(input) {
  //   const activeTopic = this.store.state.activeTopic;
  //   const nextHash = this.makeHash(input, activeTopic);
  //
  //   console.log('route to address', nextHash);
  //
  //   window.location.hash = nextHash;
  // }
  //
  // routeToTopic(topic) {
  //   // TODO add an address getter fn to config so this isn't ais-specific
  //   const address = this.store.state.geocode.data.properties.street_address;
  //   const nextHash = this.makeHash(address, topic);
  //
  //   console.log('route to topic:', topic, `(${nextHash})`);
  //
  //   window.location.hash = nextHash;
  // }

  /* DATA FETCHING METHODS */

  fetchMoreData(dataSourceKey, highestPageRetrieved) {
    const feature = this.store.state.geocode.data;
    const dataSource = this.config.dataSources[dataSourceKey];

    const state = this.store.state;
    const type = dataSource.type;

    // update secondary status to `waiting`
    const setSecondarySourceStatusOpts = {
      key: dataSourceKey,
      secondaryStatus: 'waiting'
    };
    this.store.commit('setSecondarySourceStatus', setSecondarySourceStatusOpts);
    console.log('INCREMENT - datamanager get 100 More was clicked, type', type, 'dataSource', dataSource, 'highestPageRetrieved', highestPageRetrieved);

    switch(type) {
      case 'http-get':
        console.log('INCREMENT - http-get', dataSourceKey);
        this.clients.http.fetchMore(feature,
                                dataSource,
                                dataSourceKey,
                                highestPageRetrieved);
        break;
    }

  }

  didFetchMoreData(key, secondaryStatus, data) {
    console.log('INCREMENT - DID FETCH More DATA:', key, secondaryStatus, data);

    const dataOrNull = status === 'error' ? null : data;
    let stateData = dataOrNull;

    // if this is an array, assign feature ids
    if (Array.isArray(stateData)) {
      stateData = this.assignFeatureIds(stateData, key);
    }

    // console.log('stateData', stateData);
    const nextPage = this.store.state.sources[key].data.page + 1;

    // put data in state
    const setSourceDataOpts = {
      key,
      data: stateData,
      page: nextPage
    };
    const setSecondarySourceStatusOpts = {
      key,
      secondaryStatus
    };

    console.log('nextPage', nextPage, 'setSourceDataOpts', setSourceDataOpts);
    // commit
    this.store.commit('setSourceDataMore', setSourceDataOpts);
    this.store.commit('setSecondarySourceStatus', setSecondarySourceStatusOpts);
  }


  fetchData() {
    // console.log('\nFETCH DATA');
    // console.log('-----------');

    const geocodeObj = this.store.state.geocode.data;

    // we always need a good geocode before we can get data, so return
    // if we don't have one yet.
    // if (!geocodeObj) {
    //   // console.log('fetch data but no geocode yet, returning');
    //   return;
    // }

    let dataSources = this.config.dataSources || {};
    let dataSourceKeys = Object.entries(dataSources);
    // console.log('in fetchData, dataSources before filter:', dataSources, 'dataSourceKeys:', dataSourceKeys);

    if (!geocodeObj) {
      dataSourceKeys = dataSourceKeys.filter(dataSourceKey => {
        if (dataSourceKey[1].dependent) {
          if (dataSourceKey[1].dependent === 'parcel') {
            return true;
          }
        }
      })
    }
    // console.log('in fetchData, dataSources after filter:', dataSources);

    // get "ready" data sources (ones whose deps have been met)
    // for (let [dataSourceKey, dataSource] of Object.entries(dataSources)) {
    for (let [dataSourceKey, dataSource] of dataSourceKeys) {
      const state = this.store.state;
      const type = dataSource.type;
      const targetsDef = dataSource.targets;

      // console.log('key:', dataSourceKey, type);

      // if the data sources specifies a features getter, use that to source
      // features for evaluating params/forming requests. otherwise,
      // default to the geocode result.
      let targets;
      let targetIdFn;
      let targetsFn;

      if (targetsDef) {
        targetsFn = targetsDef.get;
        targetIdFn = targetsDef.getTargetId;

        if (typeof targetsFn !== 'function') {
          throw new Error(`Invalid targets getter for data source '${dataSourceKey}'`);
        }
        targets = targetsFn(state);

        // check if target objs exist in state.
        const targetIds = targets.map(targetIdFn);
        const stateTargets = state.sources[dataSourceKey].targets;
        const stateTargetIds = Object.keys(stateTargets);
        // the inclusion check wasn't working because ids were strings in
        // one set and ints in another, so do this.
        const stateTargetIdsStr = stateTargetIds.map(String);
        const shouldCreateTargets = !targetIds.every(targetId => {
          const targetIdStr = String(targetId);
          return stateTargetIdsStr.includes(targetIdStr);
        });

        // if not, create them.
        if (shouldCreateTargets) {
          // console.log('should create targets', targetIds, stateTargetIds);
          this.store.commit('createEmptySourceTargets', {
            key: dataSourceKey,
            targetIds
          });
        }

        if (!Array.isArray(targets)) {
          throw new Error('Data source targets getter should return an array');
        }
      } else {
        targets = [geocodeObj];
      }

      // console.log('in fetchData, dataSourceKey:', dataSourceKey, 'targets:', targets);

      for (let target of targets) {
        // get id of target
        let targetId;
        if (targetIdFn) {
          targetId = targetIdFn(target);
        }

        // targetId && console.log('target:', targetId);

        // check if it's ready
        const isReady = this.checkDataSourceReady(dataSourceKey, dataSource, targetId);
        if (!isReady) {
          // console.log('not ready');
          continue;
        }

        // update status to `waiting`
        const setSourceStatusOpts = {
          key: dataSourceKey,
          status: 'waiting'
        };
        if (targetId) {
          setSourceStatusOpts.targetId = targetId;
        }
        this.store.commit('setSourceStatus', setSourceStatusOpts);

        // TODO do this for all targets
        switch(type) {
          case 'http-get':
            // console.log('http-get, target:', target, 'dataSource:', dataSource, 'dataSourceKey:', dataSourceKey, 'targetIdFn:', targetIdFn);
            this.clients.http.fetch(target,
                                    dataSource,
                                    dataSourceKey,
                                    targetIdFn);
            break;

          case 'http-get-nearby':
          // console.log('http-get-nearby', dataSourceKey, targetIdFn)
            this.clients.http.fetchNearby(target,
                                          dataSource,
                                          dataSourceKey,
                                          targetIdFn);
            break;

          case 'esri':
            // console.log('esri', dataSourceKey)
            // TODO add targets id fn
            this.clients.esri.fetch(target, dataSource, dataSourceKey);
            break;

            break;
          case 'esri-nearby':
            // console.log('esri-nearby', dataSourceKey)
            // TODO add targets id fn
            this.clients.esri.fetchNearby(target, dataSource, dataSourceKey);
            break;

          default:
            throw `Unknown data source type: ${type}`;
            break;
        }  // end of switch
      }  // end of for targets loop
      // console.log('end of targets loop for', dataSourceKey);
    } // end of for dataSource loop
    // console.log('end of outer loop');
  }

  didFetchData(key, status, data, targetId) {
    // console.log('DID FETCH DATA:', key, targetId || '', data);

    const dataOrNull = status === 'error' ? null : data;
    let stateData = dataOrNull;

    // if this is an array, assign feature ids
    if (Array.isArray(stateData)) {
      stateData = this.assignFeatureIds(stateData, key, targetId);
    }

    // does this data source have targets?
    // const targets = this.config.dataSources[key].targets;

    // put data in state
    const setSourceDataOpts = {
      key,
      data: stateData,
    };
    const setSourceStatusOpts = {
      key,
      status
    };
    if (targetId) {
      setSourceDataOpts.targetId = targetId;
      setSourceStatusOpts.targetId = targetId;
    }

    // commit
    this.store.commit('setSourceData', setSourceDataOpts);
    this.store.commit('setSourceStatus', setSourceStatusOpts);

    // try fetching more data
    // console.log('171111 data-manager.js line 319 - didFetchData - is calling fetchData on targetId', targetId, 'key', key);
    this.fetchData();
  }

  resetData() {
      const dataSources = this.config.dataSources || {};

      for (let dataSourceKey of Object.keys(dataSources)) {
        const dataSource = dataSources[dataSourceKey];
        const targetsDef = dataSource.targets;

        // null out existing data in state
        if (targetsDef) {
          this.store.commit('clearSourceTargets', {
            key: dataSourceKey
          });
        } else {
          this.store.commit('setSourceData', {
            key: dataSourceKey,
            data: null
          })
          this.store.commit('setSourceStatus', {
            key: dataSourceKey,
            status: null
          })
        }
      }
    }

    // this gets called when the current geocoded address is wiped out, such as
    // when you click on the "Atlas" title and it navigates to an empty hash
    resetGeocode() {
      // reset geocode
      this.store.commit('setGeocodeStatus', null);
      this.store.commit('setGeocodeData', null);
      this.store.commit('setGeocodeRelated', null);
      this.store.commit('setGeocodeInput', null);

      // reset parcels
      this.store.commit('setParcelData', {
        parcelLayer: 'dor',
        multipleAllowed: true,
        data: [],
        status: null,
        activeParcel: null,
        activeAddress: null,
        activeMapreg: null
      });
      this.store.commit('setParcelData', {
        parcelLayer: 'pwd',
        multipleAllowed: false,
        data: null
      });

      // reset other topic and map state
      console.log('about to setActiveTopic, config:', this.config.topics[0].key);
      this.store.commit('setActiveTopic', this.config.topics[0].key);
      this.store.commit('setActiveParcelLayer', 'pwd');
      this.store.commit('setBasemap', 'pwd');

      // reset data sources
      this.resetData();
    }

  checkDataSourcesFetched(paths = []) {
    // console.log('check data sources fetched', paths);

    const state = this.store.state;

    return paths.every(path => {
      // deps can be deep keys, e.g. `dor.parcels`. split on periods to get
      // a sequence of keys.
      const pathKeys = path.split('.');

      // TODO/TEMP restructure state so parcels and geocode live in
      // state.sources? the following targets the dorDocuments data source.
      const isDorParcels = (pathKeys.length === 1
                            && pathKeys[0] === 'dorParcels');

      if (isDorParcels) {
        return state.dorParcels.status === 'success';
      }

      // traverse state to get the parent of the data object we need to
      // check.
      const stateObj = pathKeys.reduce((acc, pathKey) => {
        return acc[pathKey];
      }, state);

      return stateObj.status === 'success';
    });
  }

  checkDataSourceReady(key, options, targetId) {
    // console.log(`check data source ready: ${key} ${targetId || ''}`, options);

    const deps = options.deps;
    // console.log('deps', deps);
    const depsMet = this.checkDataSourcesFetched(deps);
    // console.log('depsMet', depsMet);
    let isReady = false;

    // if data deps have been met
    if (depsMet) {
      // get the target obj
      let targetObj = this.store.state.sources[key];
      if (targetId) {
        targetObj = targetObj.targets[targetId];
      }

      // if the target obj has a status of null, this data source is ready.
      isReady = !targetObj.status;
    }

    // console.log('checkDataSourceReady isReady:', isReady);
    return isReady;
  }

  assignFeatureIds(features, dataSourceKey, topicId) {
    const featuresWithIds = [];

    // REVIEW this was not working with Array.map for some reason
    // it was returning an object when fetchJson was used
    // that is now converted to an array in fetchJson
    for (let i = 0; i < features.length; i++) {
      const suffix = (topicId ? topicId + '-' : '') + i;
      const id = `feat-${dataSourceKey}-${suffix}`;
      const feature = features[i];
      // console.log(dataSourceKey, feature);
      try {
        feature._featureId = id;
      }
      catch (e) {
        console.warn(e);
      }
      featuresWithIds.push(feature);
    }

    // console.log(dataSourceKey, features, featuresWithIds);
    return featuresWithIds;
  }

  evaluateParams(feature, dataSource) {
    const params = {};
    const paramEntries = Object.entries(dataSource.options.params);
    const state = this.store.state;

    for (let [key, valOrGetter] of paramEntries) {
      let val;

      if (typeof valOrGetter === 'function') {
        val = valOrGetter(feature, state);
      } else {
        val = valOrGetter;
      }

      params[key] = val;
    }

    return params;
  }

  /* GEOCODING */
  geocode(address) {
    const didGeocode = this.didGeocode.bind(this);
    // this.clients.geocode.fetch(address, didGeocode);
    return this.clients.geocode.fetch(address).then(didGeocode);
  }

  didGeocode(feature) {
    // console.log('DataManager.didGeocode:', feature);
    this.controller.router.didGeocode();

    // emit event to event bus
    // this.eventBus.$emit('geocodeResult', feature);

    const activeParcelLayer = this.store.state.activeParcelLayer;
    const lastSearchMethod = this.store.state.lastSearchMethod;
    const configForActiveParcelLayer = this.config.parcels[activeParcelLayer];
    // // const multipleAllowed = configForParcelLayer.multipleAllowed;
    // const geocodeField = configForParcelLayer.geocodeField;
    const parcelLayers = Object.keys(this.config.parcels || {});
    const otherParcelLayers = Object.keys(this.config.parcels || {});
    otherParcelLayers.splice(otherParcelLayers.indexOf(activeParcelLayer), 1);
    // console.log('didGeocode - activeParcelLayer:', activeParcelLayer, 'parcelLayers:', parcelLayers, 'otherParcelLayers:', otherParcelLayers);

    // if it is a dor parcel query, and the geocode fails, coordinates can still be used
    // to get dor parcels which are not in ais
    // set coords to the ais coords OR the click if there is no ais result
    let coords, lat, lng, latlng;
    // if geocode fails
    if (!feature) {
      // console.log('didGeocode - no geom', feature);
      if (lastSearchMethod === 'reverseGeocode') {
        const clickCoords = this.store.state.clickCoords;
        coords = [clickCoords.lng, clickCoords.lat];
        [lng, lat] = coords;
        latlng = L.latLng(lat, lng);
      }
    // if geocode succeeds
    } else {
      // console.log('didGeocode - GEOM', feature);
      coords = feature.geometry.coordinates;
      [lng, lat] = coords;
      latlng = L.latLng(lat, lng);
    }

    // if (coords) {
    //   const [lng, lat] = coords;
    //   const latlng = L.latLng(lat, lng);
    // }

    // all of this happens whether geocode failed or succeeded
    // search box or onload - get parcels by id
    // (unless it fails and you are allowed to get them by LatLng on failure)
    if (lastSearchMethod === 'geocode') {
      if (feature) {
        // console.log('didGeocode lastSearchMethod:', lastSearchMethod, '- attempting to get all parcel layers:', parcelLayers, ' by ID');
        // loop through the parcels, and get them by their ids
        for (let parcelLayer of parcelLayers) {
          const configForParcelLayer = this.config.parcels[parcelLayer];
          const parcelIdInGeocoder = configForParcelLayer.parcelIdInGeocoder
          const parcelId = feature.properties[parcelIdInGeocoder];
          if (parcelId && parcelId.length > 0) {
            this.getParcelsById(parcelId, parcelLayer);
          } else {
            if (configForParcelLayer.getByLatLngIfIdFails) {
              // console.log(parcelLayer, 'Id failed - had to get by LatLng')
              this.getParcelsByLatLng(latlng, parcelLayer);
            }
          }
        }
      }

    // map-click - get pwd and dor parcels (whichever has not already been found) by latlng
    // this is needed because it will not automatically get the dor parcels in case it does not find a pwd parcel
    // and vice versa
    } else if (lastSearchMethod === 'reverseGeocode') {
      if (feature) {
        // console.log('didGeocode lastSearchMethod:', lastSearchMethod, 'feature', feature, '- getting other parcel layers by id or latlng')
        for (let otherParcelLayer of otherParcelLayers) {
          const configForOtherParcelLayer = this.config.parcels[otherParcelLayer];
          const parcelIdInGeocoder = configForOtherParcelLayer.parcelIdInGeocoder
          const parcelId = feature.properties[parcelIdInGeocoder];
          if (parcelId && parcelId.length > 0) {
            this.getParcelsById(parcelId, otherParcelLayer);
          } else {
            if (configForOtherParcelLayer.getByLatLngIfIdFails) {
              // console.log(otherParcelLayer, 'Id failed - had to get by LatLng')
              this.getParcelsByLatLng(latlng, otherParcelLayer);
            }
          }
        }
      } else {
        // console.log('didGeocode lastSearchMethod:', lastSearchMethod, 'NO feature', feature)
        const geocodeFailAttemptParcel = configForActiveParcelLayer.geocodeFailAttemptParcel
        if (geocodeFailAttemptParcel) {
          // console.log('ran ais on a dor parcel and got no response - should try pwd parcel?', geocodeFailAttemptParcel);
          const otherParcel = this.store.state.parcels[geocodeFailAttemptParcel];
          // console.log('otherParcel:', otherParcel);
          if (otherParcel) {
            const configForOtherParcelLayer = this.config.parcels[geocodeFailAttemptParcel];
            const geocodeField = configForOtherParcelLayer.geocodeField;
            // console.log('running ais again on the pwd parcel', otherParcel.properties[geocodeField]);
            this.store.commit('setLastSearchMethod', 'reverseGeocode-secondAttempt')
            this.geocode(otherParcel.properties[geocodeField]);
          }
        }
      }
    }

    // console.log('in didGeocode, activeTopicConfig:', this.activeTopicConfig());
    const activeTopicConfig = this.activeTopicConfig();
    // console.log('activeTopicConfig.zoomToShape:', activeTopicConfig.zoomToShape);
    // const geocodeData = this.store.state.geocode.data || null;
    // const geocodeProperties = geocodeData.properties || null;
    // const newShape = geocodeProperties.opa_account_num || null;

    // only recenter the map on geocode
    if (lastSearchMethod === 'geocode' && this.store.state.geocode.status !== 'error') {
      if (!activeTopicConfig.zoomToShape) {
        // console.log('NO ZOOM TO SHAPE - NOW IT SHOULD NOT BE ZOOMING TO THE SHAPE ON GEOCODE');
        this.store.commit('setMapCenter', coords);
        this.store.commit('setMapZoom', 19);
      } else {
        // console.log('ZOOM TO SHAPE - NOW IT SHOULD BE ZOOMING TO THE SHAPE ON GEOCODE');
        // this.store.commit('setMapBoundsBasedOnShape', newShape);
      }

    } else if (activeTopicConfig.zoomToShape && lastSearchMethod === 'reverseGeocode' && this.store.state.geocode.status !== 'error') {
      // console.log('ZOOM TO SHAPE - NOW IT SHOULD BE ZOOMING TO THE SHAPE ON REVERSE GEOCODE');
      // this.store.commit('setMapBoundsBasedOnShape', newShape);
    }

    // reset data only when not a rev geocode second attempt
    if (lastSearchMethod !== 'reverseGeocode-secondAttempt') {
      // console.log('180405 in didGeocode, in if lastSearchMethod !== reverseGeocode-secondAttempt');
      this.resetData();
    }

    // as long as it is not an intersection, fetch new data
    if (feature) {
      console.log('if feature true')
      if (feature.street_address) {
        return;
      } else if (feature.properties.street_address) {
        // console.log('180405 data-manager.js - didGeocode - is calling fetchData on feature w address', feature.properties.street_address);
        this.fetchData();
      }
    } else {
      // console.log('180405 data-manager.js - didGeocode - is calling fetchData, no feature');
      this.fetchData();
    }
  } // end didGeocode

  getParcelsById(id, parcelLayer) {
    // console.log('getParcelsById', parcelLayer);

    const url = this.config.map.featureLayers[parcelLayer+'Parcels'].url;
    const configForParcelLayer = this.config.parcels[parcelLayer];
    const geocodeField = configForParcelLayer.geocodeField;
    const parcelQuery = Query({ url });
    parcelQuery.where(geocodeField + " = '" + id + "'");
    // console.log('parcelQuery:', parcelQuery);
    parcelQuery.run((function(error, featureCollection, response) {
      // console.log('171111 getParcelsById parcelQuery ran, response:', response);
      this.didGetParcels(error, featureCollection, response, parcelLayer);
    }).bind(this)
  )
  }

  getParcelsByLatLng(latlng, parcelLayer, fetch) {
    // console.log('171111 getParcelsByLatLng', parcelLayer, 'fetch', fetch);

    const url = this.config.map.featureLayers[parcelLayer+'Parcels'].url;
    const parcelQuery = Query({ url });
    parcelQuery.contains(latlng);
    const test = 5;
    parcelQuery.run((function(error, featureCollection, response) {
        // console.log('171111 getParcelsByLatLng parcelQuery ran', test, 'fetch', fetch, 'response', response);
        this.didGetParcels(error, featureCollection, response, parcelLayer, fetch);
      }).bind(this)
    )
  }

  didGetParcels(error, featureCollection, response, parcelLayer, fetch) {
    // console.log('180405 didGetParcels is running parcelLayer', parcelLayer, 'fetch', fetch, 'response', response);
    const configForParcelLayer = this.config.parcels[parcelLayer];
    const multipleAllowed = configForParcelLayer.multipleAllowed;
    const geocodeField = configForParcelLayer.geocodeField;
    const otherParcelLayers = Object.keys(this.config.parcels || {});
    otherParcelLayers.splice(otherParcelLayers.indexOf(parcelLayer), 1);
    const lastSearchMethod = this.store.state.lastSearchMethod;
    const activeParcelLayer = this.store.state.activeParcelLayer;
    // console.log('didGetParcels - parcelLayer:', parcelLayer, 'otherParcelLayers:', otherParcelLayers, 'configForParcelLayer:', configForParcelLayer);

    if (error) {
      // update state
      if (configForParcelLayer.clearStateOnError) {
      // this.store.commit('setParcelData', { parcelLayer, [] });
      // this.store.commit('setParcelStatus', { parcelLayer }, 'error' });
      }
      return;
    }

    if (!featureCollection) {
      return;
    }

    const features = featureCollection.features;

    if (features.length === 0) {
      return;
    }

    const featuresSorted = this.sortDorParcelFeatures(features);
    let feature;

    if (!multipleAllowed) {
      feature = features[0];
    // dor
    } else {
      feature = featuresSorted[0];
    }

    // use turf to get area and perimeter of all parcels returned
    for (let featureSorted of featuresSorted) {
      // const turfPolygon = polygon(featureSorted.geometry.coordinates);
      const turfPolygon = polygon(featureSorted.geometry.coordinates);
      let turfCoordinates = []
      for (let coordinate of featureSorted.geometry.coordinates[0]) {
        // console.log('coordinate:', coordinate);
        turfCoordinates.push(point(coordinate));
      }

      let distances = []
      for (let i=0; i<turfCoordinates.length - 1; i++) {
        distances[i] = distance(turfCoordinates[i], turfCoordinates[i+1], {units: 'feet'})
      }

      // console.log('coordinates:', featureSorted.geometry.coordinates, 'turfCoordinates:', turfCoordinates, 'distances:', distances);

      // turf area is returned in square meters - conversion is to square feet
      featureSorted.properties.TURF_PERIMETER = distances.reduce(function(acc, val) { return acc + val; });
      featureSorted.properties.TURF_AREA = area(turfPolygon) * 10.7639;
    }

    // at this point there is definitely a feature or features - put it in state
    this.setParcelsInState(parcelLayer, multipleAllowed, feature, featuresSorted);

    // shouldGeocode - true only if:
    // 1. didGetParcels is running because the map was clicked (lastSearchMethod = reverseGeocode)
    // 2. didGetParcels' parameter "parcelLayer" = activeParcelLayer
    const shouldGeocode = (
      activeParcelLayer === parcelLayer &&
      lastSearchMethod === 'reverseGeocode'
    );

    // console.log('didGetParcels - shouldGeocode is', shouldGeocode);
    if (shouldGeocode) {
      // since we definitely have a new parcel, and will attempt to geocode it:
      // 1. wipe out state data on other parcels
      // 2. attempt to replace
      // if (lastSearchMethod === 'reverseGeocode') { // || !configForParcelLayer.wipeOutOtherParcelsOnReverseGeocodeOnly) {
      const clickCoords = this.store.state.clickCoords;
      const coords = [clickCoords.lng, clickCoords.lat];
      const [lng, lat] = coords;
      const latlng = L.latLng(lat, lng);

      // console.log('didGetParcels is wiping out the', otherParcelLayers, 'parcels in state');
      for (let otherParcelLayer of otherParcelLayers) {
        console.log('for let otherParcelLayer of otherParcelLayers is running');
        const configForOtherParcelLayer = this.config.parcels[otherParcelLayer];
        const otherMultipleAllowed = configForOtherParcelLayer.multipleAllowed;
        this.setParcelsInState(otherParcelLayer, otherMultipleAllowed, null, [])
        this.getParcelsByLatLng(latlng, otherParcelLayer, 'noFetch')
      }

      // console.log('didGetParcels - shouldGeocode is running');
      const props = feature.properties || {};
      const id = props[geocodeField];
      if (id) this.controller.router.routeToAddress(id);
    } else {
      // console.log('180405 data-manager.js didGetParcels - if shouldGeocode is NOT running');
      // if (lastSearchMethod != 'reverseGeocode-secondAttempt') {
      // if (fetch !== 'noFetch') {
      if (fetch !== 'noFetch' && lastSearchMethod != 'reverseGeocode-secondAttempt') {
        // console.log('180405 data-manager.js - didGetParcels - is calling fetchData() on feature w address', feature.properties.street_address);
        this.fetchData();
      }
    }
  }

  setParcelsInState(parcelLayer, multipleAllowed, feature, featuresSorted) {
    let payload;
    // pwd
    if (!multipleAllowed) {
      payload = {
        parcelLayer,
        multipleAllowed,
        data: feature
      }
    // dor
    } else {
      payload = {
        parcelLayer,
        multipleAllowed,
        data: featuresSorted,
        status: 'success',
        activeParcel: feature ? feature.id : null,
        // TODO apply concatDorAddress in client config - this global is no
        // longer available
        // activeAddress: feature ? concatDorAddress(feature) : null,
        activeAddress: null,
        activeMapreg: feature ? feature.properties.MAPREG : null
      }
    }
    // update state
    this.store.commit('setParcelData', payload);
  }

  sortDorParcelFeatures(features) {
    // map parcel status to a numeric priority
    // (basically so remainders come before inactives)
    const STATUS_PRIORITY = {
      1: 1,
      2: 3,
      3: 2
    }

    // first sort by mapreg (descending)
    features.sort((a, b) => {
      const mapregA = a.properties.MAPREG;
      const mapregB = b.properties.MAPREG;

      if (mapregA < mapregB) return 1;
      if (mapregA > mapregB) return -1;
      return 0;
    });

    // then sort by status
    features.sort((a, b) => {
      const statusA = STATUS_PRIORITY[a.properties.STATUS];
      const statusB = STATUS_PRIORITY[b.properties.STATUS];

      if (statusA < statusB) return -1;
      if (statusA > statusB) return 1;
      return 0;
    });

    return features;
  }
}

export default DataManager;

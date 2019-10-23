import L from 'leaflet';

import { arcgisToGeoJSON } from 'arcgis-to-geojson-utils';
import { setRenderer } from './Renderer';

export var KMLLayer = L.GeoJSON.extend({
  options: {
    opacity: 1,
    url: '',
  },

  initialize: function (layers, options) {
    L.setOptions(this, options);

    this.url = this.options.url;
    this.opacity = this.options.opacity;
    this.popupInfo = null;
    this.labelingInfo = null;
    this._layers = {};

    var i, len;

    if (layers) {
      for (i = 0, len = layers.length; i < len; i++) {
        this.addLayer(layers[i]);
      }
    }

    this._getKML(this.url);
  },

  _getKML: function (url) {
    var requestUrl = 'http://utility.arcgis.com/sharing/kml?url=' + url + '&model=simple&folders=&outSR=%7B"wkid"%3A4326%7D';
    L.esri.request(requestUrl, {}, function (err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
        this._parseFeatureCollection(res.featureCollection);
      }
    }, this);
  },

  _parseFeatureCollection: function (featureCollection) {
    console.log('_parseFeatureCollection');
    var i;
    for (i = 0; i < 3; i++) {
      if (featureCollection.layers[i].featureSet.features.length > 0) {
        console.log(i);
        var features = featureCollection.layers[i].featureSet.features;
        var objectIdField = featureCollection.layers[i].layerDefinition.objectIdField;

        var geojson = this._featureCollectionToGeoJSON(features, objectIdField);

        if (featureCollection.layers[i].popupInfo !== undefined) {
          this.popupInfo = featureCollection.layers[i].popupInfo;
        }
        if (featureCollection.layers[i].layerDefinition.drawingInfo.labelingInfo !== undefined) {
          this.labelingInfo = featureCollection.layers[i].layerDefinition.drawingInfo.labelingInfo;
        }

        setRenderer(featureCollection.layers[i].layerDefinition, this);
        console.log(geojson);
        this.addData(geojson);
      }
    }
  },

  _featureCollectionToGeoJSON: function (features, objectIdField) {
    var geojsonFeatureCollection = {
      type: 'FeatureCollection',
      features: [],
    };
    var featuresArray = [];
    var i, len;

    for (i = 0, len = features.length; i < len; i++) {
      var geojson = arcgisToGeoJSON(features[i], objectIdField);
      featuresArray.push(geojson);
    }

    geojsonFeatureCollection.features = featuresArray;

    return geojsonFeatureCollection;
  },
});

export function kmlLayer (geojson, options) {
  return new KMLLayer(geojson, options);
}

export default KMLLayer;

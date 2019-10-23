import L from 'leaflet';

import omnivore from 'leaflet-omnivore';
import { setRenderer } from './Renderer';

export var CSVLayer = L.GeoJSON.extend({
  options: {
    url: '',
    data: {}, // Esri Feature Collection JSON or Item ID
    opacity: 1,
  },

  initialize: function (layers, options) {
    L.setOptions(this, options);

    this.url = this.options.url;
    this.layerDefinition = this.options.layerDefinition;
    this.locationInfo = this.options.locationInfo;
    this.opacity = this.options.opacity;
    this._layers = {};

    var i, len;

    if (layers) {
      for (i = 0, len = layers.length; i < len; i++) {
        this.addLayer(layers[i]);
      }
    }

    this._parseCSV(this.url, this.layerDefinition, this.locationInfo);
  },

  _parseCSV: function (url, layerDefinition, locationInfo) {
    omnivore.csv(url, {
      latfield: locationInfo.latitudeFieldName,
      lonfield: locationInfo.longitudeFieldName,
    }, this);

    setRenderer(layerDefinition, this);
  },
});

export function csvLayer (geojson, options) {
  return new CSVLayer(geojson, options);
}

export default CSVLayer;

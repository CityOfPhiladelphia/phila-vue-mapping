import L from 'leaflet';
import { labelIcon } from './LabelIcon';

export var LabelMarker = L.Marker.extend({
  options: {
    properties: {},
    labelingInfo: {},
    offset: [ 0, 0 ],
  },

  initialize: function (latlng, options) {
    L.setOptions(this, options);
    this._latlng = L.latLng(latlng);

    var labelText = this._createLabelText(this.options.properties, this.options.labelingInfo);
    this._setLabelIcon(labelText, this.options.offset);
  },

  _createLabelText: function (properties, labelingInfo) {
    var r = /\[([^\]]*)\]/g;
    var labelText = labelingInfo[0].labelExpression;

    labelText = labelText.replace(r, function (s) {
      var m = r.exec(s);
      return properties[m[1]];
    });

    return labelText;
  },

  _setLabelIcon: function (text, offset) {
    var icon = labelIcon({
      text: text,
      iconAnchor: offset,
    });

    this.setIcon(icon);
  },
});

export function labelMarker (latlng, options) {
  return new LabelMarker(latlng, options);
}

export default labelMarker;

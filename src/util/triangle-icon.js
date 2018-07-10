// L.DivIcon.SVGIcon.noCircleIcon = L.DivIcon.SVGIcon.extend({
//     initialize: function(options) {
//         options = L.Util.setOptions(this, options)
//         options.circleAnchor = L.point(Number(options.iconSize.x)/2, Number(options.iconSize.y)/2)
//         options.circleRatio = 0;
//         L.DivIcon.SVGIcon.prototype.initialize.call(this, options)
//
//         return options
//     },
// })

// L.divIcon.svgIcon.noCircleIcon = function(options) {
//     return new L.DivIcon.SVGIcon.NoCircleIcon(options)
// }

// L.Marker.SVGMarker.NoCircleMarker = L.Marker.SVGMarker.extend({
//     options: {
//         "iconFactory": L.divIcon.svgIcon.NoCircleIcon
//     }
// })
//
// L.marker.svgMarker.noCircleMarker = function(latlng, options) {
//     return new L.Marker.SVGMarker.noCircleMarker(latlng, options)
// }

import * as L from 'leaflet';
import SvgIcon from './svg-icon';

const TriangleIcon = SvgIcon.extend({
  initialize: function(options) {
    options = L.Util.setOptions(this, options);
    const circleAnchor = L.point(Number(options.iconSize.x) / 2,
                                 Number(options.iconSize.y) / 2);
    options.circleAnchor = circleAnchor;
    options.circleRatio = 0;
    options.className = options.className + "-noClick";
    SvgIcon.prototype.initialize.call(this, options);

    return options;
  },

  _createPathDescription: function () {
    const height = Number(this.options.iconSize.y);
    const width = Number(this.options.iconSize.x);
    const weight = Number(this.options.weight);
    const margin = weight;

    const startPoint = "M " + margin + " " + (0) + " ";
    const leftLine = "L " + (width / 2) + " " + (height - margin) + " ";
    const rightLine = "L " + (width - margin) + " " + (0) + " Z";
    const d = startPoint + leftLine + rightLine;

    return d;
  }
})

export default TriangleIcon;

// L.divIcon.svgIcon.triangleIcon = function(options) {
//     return new L.DivIcon.SVGIcon.TriangleIcon(options)
// }

// L.Marker.SVGMarker.TriangleMarker = L.Marker.SVGMarker.extend({
//     options: {
//         "iconFactory": L.divIcon.svgIcon.triangleIcon
//     }
// })
//
// L.marker.svgMarker.triangleMarker = function(latlng, options) {
//     return new L.Marker.SVGMarker.TriangleMarker(latlng, options)
// }

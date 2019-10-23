import L from 'leaflet';

export var LabelIcon = L.DivIcon.extend({
  options: {
    iconSize: null,
    className: 'esri-leaflet-webmap-labels',
    text: '',
  },

  createIcon: function (oldIcon) {
    var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div');
    var options = this.options;

    div.innerHTML = '<div style="position: relative; left: -50%; text-shadow: 1px 1px 0px #fff, -1px 1px 0px #fff, 1px -1px 0px #fff, -1px -1px 0px #fff;">' + options.text + '</div>';

    // label.css
    div.style.fontSize = '1em';
    div.style.fontWeight = 'bold';
    div.style.textTransform = 'uppercase';
    div.style.textAlign = 'center';
    div.style.whiteSpace = 'nowrap';

    if (options.bgPos) {
      var bgPos = L.point(options.bgPos);
      div.style.backgroundPosition = (-bgPos.x) + 'px ' + (-bgPos.y) + 'px';
    }
    this._setIconStyles(div, 'icon');

    return div;
  },
});

export function labelIcon (options) {
  return new LabelIcon(options);
}

export default labelIcon;

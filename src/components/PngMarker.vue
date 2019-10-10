<!--
  wraps Leaflet.vector-markers as a vue component
  https://github.com/hiasinho/Leaflet.vector-markers
-->

<script>
import * as L from 'leaflet';

export default {
  name: 'PngMarker',
  props: [
    'icon',
    'latlng',
    'rotationAngle',
  ],
  watch: {
    rotationAngle(nextRotationAngle) {
      // console.log('pngMarker orientation changed', nextRotationAngle);
      this.$leafletElement._map.removeLayer(this.$leafletElement);
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;

      // REVIEW kind of hacky/not reactive?
      if (map) {
        leafletElement.addTo(map);
      }
    },
    latlng(nextLatLng) {
      // console.log('pngMarker orientation changed', nextRotationAngle);
      this.$leafletElement._map.removeLayer(this.$leafletElement);
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;

      // REVIEW kind of hacky/not reactive?
      if (map) {
        leafletElement.addTo(map);
      }
    },
  },
  mounted() {
    var proto_initIcon = L.Marker.prototype._initIcon;
    var proto_setPos = L.Marker.prototype._setPos;

    var oldIE = (L.DomUtil.TRANSFORM === 'msTransform');

    L.Marker.addInitHook(function () {
      var iconOptions = this.options.icon && this.options.icon.options;
      var iconAnchor = iconOptions && this.options.icon.options.iconAnchor;
      if (iconAnchor) {
        iconAnchor = (iconAnchor[0] + 'px ' + iconAnchor[1] + 'px');
      }
      this.options.rotationOrigin = this.options.rotationOrigin || iconAnchor || 'center bottom' ;
      this.options.rotationAngle = this.options.rotationAngle || 0;

      // console.log('PngMarker addInitHook, iconOptions:', iconOptions, 'iconAnchor:', iconAnchor, 'this.options.rotationOrigin:', this.options.rotationOrigin, 'this.options.rotationAngle:', this.options.rotationAngle);

      // Ensure marker keeps rotated during dragging
      this.on('drag', function(e) {
        e.target._applyRotation();
      });
    });

    L.Marker.include({
      _initIcon: function() {
        // console.log('_initIcon is running');
        proto_initIcon.call(this);
      },

      _setPos: function (pos) {
        // console.log('_setPos is running, pos:', pos);
        proto_setPos.call(this, pos);
        this._applyRotation();
      },

      _applyRotation: function () {
        if(this.options.rotationAngle) {
          // console.log('PngMarker _applyRotation is running, this.options.rotationAngle:', this.options.rotationAngle);
          this._icon.style[L.DomUtil.TRANSFORM+'Origin'] = this.options.rotationOrigin;

          if(oldIE) {
            // for IE 9, use the 2D rotation
            // console.log('oldIE');
            this._icon.style[L.DomUtil.TRANSFORM] = 'rotate(' + this.options.rotationAngle + 'deg)';
          } else {
            // for modern browsers, prefer the 3D accelerated version
            // console.log('notOldIE');
            this._icon.style[L.DomUtil.TRANSFORM] += ' rotate(' + this.options.rotationAngle + 'deg)';
            // this._icon.style[L.DomUtil.TRANSFORM] += ' rotateZ(' + this.options.rotationAngle + 'deg)';
            // this.setRotationAngle(this.options.rotationAngle);
          }
        }
      },

      setRotationAngle: function(angle) {
        // console.log('PngMarker setRotationAngle is running');
        this.options.rotationAngle = angle;
        this.update();
        return this;
      },

      setRotationOrigin: function(origin) {
        // console.log('PngMarker setRotationOrigin is running');
        this.options.rotationOrigin = origin;
        this.update();
        return this;
      },
    });

    const leafletElement = this.$leafletElement = this.createLeafletElement();
    const map = this.$store.state.map.map;

    // REVIEW kind of hacky/not reactive?
    if (map) {
      leafletElement.addTo(map);
      // console.log('leafletElement:', leafletElement);
    }
  },
  destroyed() {
    // console.log('pngMarker destroyed fired, latlng is', this.latlng);
    this.$leafletElement._map.removeLayer(this.$leafletElement);
  },
  methods: {
    createLeafletElement() {
      // console.log('pngMarker createLeafletElement is running');

      const icon = L.icon({
        iconUrl: this.icon,
        iconSize: [ 26, 16 ],
        iconAnchor: [ 11, 8 ],
      });

      // console.log('createLeafletElement is running, this.latlng:', this.latlng);
      return L.marker(this.latlng, {
        icon: icon,
        rotationAngle: this.rotationAngle,
      });
    },
    parentMounted(parent) {
      const map = parent.$leafletElement;
      this.$leafletElement.addTo(map);
    },
  },
  render(h) {
    // for some reason, the react prop that `this.orientation` depends on has
    // to be evaluated once in order to receive updates.
    // this.orientation;

    return;
  },
};
</script>

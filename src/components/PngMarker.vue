<!--
  wraps Leaflet.vector-markers as a vue component
  https://github.com/hiasinho/Leaflet.vector-markers
-->

<script>
  import * as L from 'leaflet';

  export default {
    props: [
      'icon',
      'latlng',
      'rotationAngle'
    ],
    render(h) {
      // for some reason, the react prop that `this.orientation` depends on has
      // to be evaluated once in order to receive updates.
      // this.orientation;

      return;
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

          // Ensure marker keeps rotated during dragging
          this.on('drag', function(e) { e.target._applyRotation(); });
      });

      L.Marker.include({
          _initIcon: function() {
              proto_initIcon.call(this);
          },

          _setPos: function (pos) {
              proto_setPos.call(this, pos);
              this._applyRotation();
          },

          _applyRotation: function () {
              if(this.options.rotationAngle) {
                  this._icon.style[L.DomUtil.TRANSFORM+'Origin'] = this.options.rotationOrigin;

                  if(oldIE) {
                      // for IE 9, use the 2D rotation
                      this._icon.style[L.DomUtil.TRANSFORM] = 'rotate(' + this.options.rotationAngle + 'deg)';
                  } else {
                      // for modern browsers, prefer the 3D accelerated version
                      this._icon.style[L.DomUtil.TRANSFORM] += ' rotateZ(' + this.options.rotationAngle + 'deg)';
                  }
              }
          },

          setRotationAngle: function(angle) {
              this.options.rotationAngle = angle;
              this.update();
              return this;
          },

          setRotationOrigin: function(origin) {
              this.options.rotationOrigin = origin;
              this.update();
              return this;
          }
      });

      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;

      // REVIEW kind of hacky/not reactive?
      if (map) {
        leafletElement.addTo(map);
      }
    },
    destroyed() {
      //console.log('pngMarker destroyed fired, latlng is', this.latlng);
      this.$leafletElement._map.removeLayer(this.$leafletElement);
    },
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
      }
    },
    methods: {
      createLeafletElement() {
        // console.log('pngMarker createLeafletElement is running');

        const icon = L.icon({
            iconUrl: this.icon,
            iconSize: [26, 16],
            iconAnchor: [11, 8],
          })

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
    }
  };
</script>

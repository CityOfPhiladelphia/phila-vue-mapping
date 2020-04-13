<script>

export default {
  name: 'MbIcon',
  props: [
    'url',
    'rotationAngle',
    // 'minZoom',
    // 'maxZoom',
    // 'zIndex',
    // 'attribution',
  ],
  watch: {
    rotationAngle(nextRotationAngle) {
      // let map = this.$store.state.map.map;
      console.log('watch rotationAngle, this.$mapboxElement:', this.$mapboxElement);
    //   if (this.$leafletElement._map) {
    //     console.log('pngMarker orientation changed', nextRotationAngle);
    //     this.$leafletElement._map.removeLayer(this.$leafletElement);
    //   }
    //   const leafletElement = this.$leafletElement = this.createLeafletElement();
    //   const map = this.$store.state.map.map;
    //
    //   // REVIEW kind of hacky/not reactive?
    //   if (map) {
    //     leafletElement.addTo(map);
    //   }
    },
  },
  mounted() {
    const map = this.$store.state.map;
    console.log('MbIcon.vue mounted is running, map:', map);
    const mapboxElement = this.$mapboxElement = this.createMapboxElement();

    // REVIEW kind of hacky/not reactive?
    if (map) {
    //   leafletElement.addTo(map);
    //   map.attributionControl.removeAttribution('overwrite');
    //   map.attributionControl.removeAttribution('<span class="esri-attributions" style="line-height:14px; vertical-align: -3px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden; display:inline-block; max-width:1385px;"></span>');
      this.parentMounted(map);
    }
  },
  destroyed() {
    const map = this.$store.state.map.map;
    map.removeLayer('points');
  },
  methods: {
    createMapboxElement() {
      console.log('MbIcon.vue createMapboxElement')

      // const map = parent.map;
      const map = this.$store.state.map.map;
      console.log('MbIcon.vue parentMounted is running, map:', map);
      map.loadImage(
        this.$props.url,
        function(error, image) {
          if (error) throw error;
          console.log('in loadImage callback, map:', map);
          if (!Object.keys(map.style.imageManager.images).includes('markers')) {
            map.addImage('markers', image);
          }
          if (!Object.keys(map.style.sourceCaches).includes('point')) {
            map.addSource('point', {
              'type': 'geojson',
              'data': {
                'type': 'FeatureCollection',
                'features': [
                  {
                    'type': 'Feature',
                    'geometry': {
                      'type': 'Point',
                      'coordinates': [-75.163471, 39.953338]
                    }
                  }
                ]
              }
            });
          }
          map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'point',
            'layout': {
              'icon-image': 'markers',
              'icon-size': 0.20,
              'icon-keep-upright': true,
              'icon-rotation-alignment': 'map',
              // 'symbol-placement': 'line',
            }
          });
        }
      );


      // let layer = {
      //   'id': 'labels',
      //   'type': 'raster',
      //   'source': 'labels',
      // }
      // return layer;
    },
    parentMounted(parent) {
      // const mapboxElement = this.$mapboxElement = this.createMapboxElement(parent);


    },
  },
  render(h) {
    return;
  },
};
</script>

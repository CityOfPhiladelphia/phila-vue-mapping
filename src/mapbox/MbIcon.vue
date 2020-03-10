<script>

export default {
  name: 'MbIcon',
  props: [
    'url',
    // 'minZoom',
    // 'maxZoom',
    // 'zIndex',
    // 'attribution',
  ],
  mounted() {
    const map = this.$store.state.map;
    console.log('MbIcon.vue mounted is running, map:', map);
    // const mapboxElement = this.$mapboxElement = this.createMapboxElement();

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
      let layer = {
        'id': 'labels',
        'type': 'raster',
        'source': 'labels',
      }
      return layer;
    },
    parentMounted(parent) {
      const map = parent.map;
      // const map = this.$store.state.map.map;
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
              'icon-size': 0.10
            }
          });
        }
      );
    },
  },
  render(h) {
    return;
  },
};
</script>

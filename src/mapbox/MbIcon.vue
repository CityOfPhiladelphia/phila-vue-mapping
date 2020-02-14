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
    console.log('MbIcon.vue mounted is running');
    const mapboxElement = this.$mapboxElement = this.createMapboxElement();
    const map = this.$store.state.map.map;

    // REVIEW kind of hacky/not reactive?
    // if (map) {
    //   leafletElement.addTo(map);
    //   map.attributionControl.removeAttribution('overwrite');
    //   map.attributionControl.removeAttribution('<span class="esri-attributions" style="line-height:14px; vertical-align: -3px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden; display:inline-block; max-width:1385px;"></span>');
    // }
  },
  destroyed() {
    // console.log('EsriTiledMapLayer destroyed is running');
    this.$mapboxElement._map.removeLayer(this.$mapboxElement);
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
      const map = parent.$mapboxElement;
      console.log('MbLayer.vue parentMounted is running, parent:', parent, 'map:', map);
      map.loadImage(
        // '../assets/markers.png',
        this.$props.url,
        // 'https://mapboard-images.s3.amazonaws.com/camera.png',
        // 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png',
        function(error, image) {
          if (error) throw error;
          map.addImage('markers', image);
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
        map.addLayer({
          'id': 'points',
          'type': 'symbol',
          'source': 'point',
          'layout': {
            'icon-image': 'markers',
            'icon-size': 0.25
          }
          });
        }
      );
      // map.addSource('labels', {
      //   type: 'raster',
      //   tiles: [this.$props.url + '/tile/{z}/{y}/{x}'],
      //   tileSize: 256
      // });
      // map.addLayer(this.$mapboxElement);
    },
  },
  // we don't actually render anything, but need to define either a template
  // or a render function
  render(h) {
    return;
  },
};
</script>

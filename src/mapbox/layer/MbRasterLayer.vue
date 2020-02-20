<script>

export default {
  name: 'MbLayer',
  props: [
    'url',
    // 'minZoom',
    // 'maxZoom',
    // 'zIndex',
    // 'attribution',
  ],
  mounted() {
    console.log('MbLayer.vue mounted is running');
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
      map.addSource('labels', {
        type: 'raster',
        tiles: [this.$props.url + '/tile/{z}/{y}/{x}'],
        tileSize: 256
      });
      map.addLayer(this.$mapboxElement);
      // this.$mapboxElement.addTo(map);
      // map.attributionControl.removeAttribution('overwrite');
      // map.attributionControl.removeAttribution('<span class="esri-attributions" style="line-height:14px; vertical-align: -3px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden; display:inline-block; max-width:1385px;"></span>');
    },
  },
  // we don't actually render anything, but need to define either a template
  // or a render function
  render(h) {
    return;
  },
};
</script>

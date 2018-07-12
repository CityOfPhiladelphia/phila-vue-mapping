<script>
  import * as L from 'leaflet';
  import { tiledMapLayer as TiledMapLayer } from 'esri-leaflet';

  export default {
    props: [
      'url',
      'minZoom',
      'maxZoom',
      'zIndex',
      'attribution'
    ],
    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;

      // REVIEW kind of hacky/not reactive?
      if (map) {
        leafletElement.addTo(map);
        map.attributionControl.removeAttribution('overwrite');
        map.attributionControl.removeAttribution('<span class="esri-attributions" style="line-height:14px; vertical-align: -3px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden; display:inline-block; max-width:1385px;"></span>');
      }
    },
    destroyed() {
      this.$leafletElement._map.removeLayer(this.$leafletElement);
    },
    // we don't actually render anything, but need to define either a template
    // or a render function
    render(h) {
      return;
    },
    methods: {
      createLeafletElement() {
        const props = Object.assign({}, this.$props);
        const mapLayer = new TiledMapLayer(props);
        return mapLayer;

      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
        map.attributionControl.removeAttribution('overwrite');
        map.attributionControl.removeAttribution('<span class="esri-attributions" style="line-height:14px; vertical-align: -3px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden; display:inline-block; max-width:1385px;"></span>');
      }
    }
  };
</script>

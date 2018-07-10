<!-- <template>
  <opacity-slider :layer="this.$leafletElement"
                  :position="'topleft'"
  />
</template> -->
<script>
  import * as L from 'leaflet';
  import { featureLayer as FeatureLayer } from 'esri-leaflet';

  // min and max zooms are not handled by esri leaflet, but are handled by vue
  export default {
    props: [
      'url',
      'minZoom',
      'maxZoom',
      'zIndex',
      'layerName',
      'color',
      'fillColor',
      'fillOpacity',
      'weight',
      'style_',
    ],
    created() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;
      // REVIEW kind of hacky/not reactive?
      if (map) {
        leafletElement.addTo(map);
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

        // remove underscore from style_ prop. `style` is a vue reserved word.
        const { style_ } = props;
        delete props.style_;
        props.style = style_;

        return new FeatureLayer(props);
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      }
    }
  };
</script>

<style>


</style>

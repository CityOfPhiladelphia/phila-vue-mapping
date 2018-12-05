<script>
  import Control from '../leaflet/Control.vue';
  import * as L from 'leaflet';
  import 'sdleafletdraw';

  // Include the css files
  require('sdleafletdraw/dist/leaflet.draw.css');



  export default {
    props: [
      'position',
      'control',
      'edit'
    ],

    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
    },
    destroyed() {
      this.$leafletElement._map.removeControl(this.$leafletElement);
    },
    render(h) {
      return;
    },

    methods: {
      createLeafletElement() {
        const { position } = this.$props;
        const { control } = this.$props;
        const editableLayers = new L.FeatureGroup();

        const drawControl = new L.Control.Draw({
          draw: {
            polyline: false,
            polygon: true,
            circle: false,
            marker: false,
            rectangle: false,
          },
          control,
          position,
          edit: {
            featureGroup: editableLayers,  // A leaflet featureGroup
          }
        });
        return drawControl
      },

      parentMounted(parent) {
        const map = parent.$leafletElement;
        map.addControl(this.$leafletElement);
      }
    }
  };
</script>

<style scoped>

</style>

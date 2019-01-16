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
    computed: {
      editableLayers() {
        return this.$store.state.editableLayers;
      }
    },
    methods: {
      editableLayersChange(editableLayers) {
        // console.log("editableLayersChange is working", editableLayers);
        this.$store.commit('setEditableLayers', editableLayers);
      },
      createLeafletElement() {
        const { position } = this.$props;
        const { control } = this.$props;
        const editableLayers = new L.FeatureGroup();
        this.editableLayersChange(editableLayers);

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
          edit: false,
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

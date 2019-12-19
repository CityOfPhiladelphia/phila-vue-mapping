<script>
import Control from '../leaflet/Control.vue';
import * as L from 'leaflet';
import 'sdleafletdraw';

// Include the css files
// require('sdleafletdraw/dist/leaflet.draw.css');
import 'sdleafletdraw/dist/leaflet.draw.css';



export default {
  props: [
    'position',
    'control',
    'edit',
  ],
  computed: {
    editableLayers() {
      return this.$store.state.editableLayers;
    },
  },

  mounted() {
    const leafletElement = this.$leafletElement = this.createLeafletElement();
    this.setOnClick();
  },
  destroyed() {
    this.$leafletElement._map.removeControl(this.$leafletElement);
  },
  methods: {
    async setOnClick() {
      let test = await this.createLeafletElement();
      const drawControlButton = document.querySelector('[title="Draw a polygon"]');
      drawControlButton.addEventListener('click', this.controlClick);
    },
    controlClick() {
      if (Object.keys(this.$store.state).includes('bufferMode')) {
        this.$store.commit('setBufferMode', false);
        // this.$store.commit('setBufferShape', false);
      }
    },
    editableLayersChange(editableLayers) {
      // console.log("editableLayersChange is working", editableLayers);
      this.$store.commit('setEditableLayers', editableLayers);
    },
    createLeafletElement() {
      console.log('DrawControl createLeafletElement is running, L:', L);
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
      return drawControl;
    },
    parentMounted(parent) {
      // console.log('DrawControl parentMounted is running')
      const map = parent.$leafletElement;
      map.addControl(this.$leafletElement);
    },
  },
  render(h) {
    return;
  },
};
</script>

<style>

  .leaflet-draw-toolbar-button-enabled {
    background-color: rgb(243, 198, 19) !important;
  }

</style>

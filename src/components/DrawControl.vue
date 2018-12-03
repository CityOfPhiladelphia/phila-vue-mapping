<script>
  import Control from '../leaflet/Control.vue';
  import * as L from 'leaflet';
  import 'sdleafletdraw';
  // Include the css files
  // import './sdleafletdraw/dist/leaflet.draw.css';

  const {props, methods} = Control;

  export default {
    props: [
      'position',
      'draw',
      'control'
    ],

    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
    },
    destroyed() {
      this.$leafletElement._map.removeControl(this.$leafletElement);
    },

    methods: {
      createLeafletElement() {
        const { position } = this.$props;

        const drawControl = new L.Control.Draw({
          draw: {
            polyline,
            polygon,
            circle,
            marker,
            rectangle,
          },
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

<style>
</style>

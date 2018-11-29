<script>
  import * as L from 'leaflet';
  import { Draw } from 'leaflet-draw';

  export default {
    props: ['position'],
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

        return new L.Control.Draw({
          draw: {
            polyline: false,
            polygon: false,
            circle: false,
            marker: false,
            rectangle: true,
          },
        });
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

<script>
  import { Marker } from 'leaflet';
  import VectorIcon from 'leaflet-vector-icon';

  export default {
    props: [
      'latlng',
      'markerColor',
      'icon'
    ],
    render(h) {
      const a = this.$props.latlng;
      return;
    },
    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;

      // REVIEW kind of hacky/not reactive?
      if (map) {
        leafletElement.addTo(map);
      }
    },
    updated() {
      this.$leafletElement._map.removeLayer(this.$leafletElement);
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
    methods: {
      createLeafletElement() {
        const icon = new VectorIcon({
          icon:  this.$props.icon || 'circle',
          markerColor: this.$props.markerColor || '#2176d2',
        });
        // const icon = {};

        return new Marker(this.latlng, { icon });
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      },
    },
  };
</script>

<style scoped>

/* .fa-lg {
  vertical-align: -10%;
} */

</style>

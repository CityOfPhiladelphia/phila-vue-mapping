<script>
import { Polyline } from 'leaflet';

export default {
  name: 'Polyline',
  props: [
    'latlngs',
    'color',
    'weight',
    'pane',
    'data',
  ],
  watch: {
    latlngs(nextLatLngs) {
      // console.log('polyline latlngs changed');
      this.$leafletElement._map.removeLayer(this.$leafletElement);
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;
      if (map) {
        // console.log('on update, polyline adding to map, element:', leafletElement);
        leafletElement.addTo(map);
      }
    },
  },
  mounted() {
    const leafletElement = this.$leafletElement = this.createLeafletElement();
    const map = this.$store.state.map.map;
    if (map) {
      // console.log('polyline adding to map, element:', leafletElement);
      leafletElement.addTo(map);
    }
  },
  destroyed() {
    this.$leafletElement._map.removeLayer(this.$leafletElement);
  },
  methods: {
    createLeafletElement() {
      // console.log('polyline createLeafletElement is firing, latlngs:', this.$props.latlngs);
      return new Polyline(this.$props.latlngs, {
        color: this.$props.color,
        weight: this.$props.weight,
        pane: this.$props.pane,
        data: this.$props.data,
        'z-index': 10000,
      });
    },
    parentMounted(parent) {
      // console.log('polyline parentMounted is firing, this.$leafletElement:', this.$leafletElement);
      const map = parent.$leafletElement;
      this.$leafletElement.addTo(map);
    },
  },
  render(h) {
    return;
  },
};

</script>

<script>
  import { Marker } from 'leaflet';
  import VectorIcon from 'leaflet-vector-icon';
  import 'leaflet-vector-icon/dist/leaflet-vector-icon.css';
  import bindEvents from '../leaflet/util/bind-events';


  export default {
    name: 'VectorMarker',
    props: [
      'latlng',
      'markerColor',
      'icon',
      'data',
    ],
    render(h) {
      const a = this.$props.latlng;
      return;
    },
    mounted() {
      // console.log('VectorMarker mounted is running, this:', this);
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;

      // REVIEW kind of hacky/not reactive?
      if (map) {
        leafletElement.addTo(map);
      }

      bindEvents(this, this.$leafletElement, this._events);
    },
    updated() {
      // console.log('VectorMarker updated is running');
      this.$leafletElement._map.removeLayer(this.$leafletElement);
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;

      // REVIEW kind of hacky/not reactive?
      if (map) {
        leafletElement.addTo(map);
      }
      bindEvents(this, this.$leafletElement, this._events);
    },
    destroyed() {
      // console.log('VectorMarker destroyed is running');
      this.$leafletElement._map.removeLayer(this.$leafletElement);
    },
    methods: {
      createLeafletElement() {
        const props = this.$props;
        const {
          latlng,
          ...options
        } = props;
        options.icon = new VectorIcon({
          icon:  this.$props.icon || 'circle',
          markerColor: this.$props.markerColor || '#2176d2',
        });
        // const icon = {};

        // return new Marker(this.latlng, { icon });
        return new Marker(this.latlng, options);
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

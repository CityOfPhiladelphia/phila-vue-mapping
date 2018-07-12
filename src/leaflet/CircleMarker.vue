<script>
  import { CircleMarker }  from 'leaflet';
  import bindEvents from './util/bind-events';

  export default {
    props: [
      'latlng',
      'radius',
      'fillColor',
      'color',
      'weight',
      'opacity',
      'fillOpacity',
      'data',
      'pane'
    ],
    watch: {
      latlng(nextLatlng) {
        // alert('watch circleMarker props latlng is running nextLatlng:', nextLatlng);
        this.$leafletElement._map.removeLayer(this.$leafletElement);
        const leafletElement = this.$leafletElement = this.createLeafletElement();
        const map = this.$store.state.map.map;
        if (map) {
          leafletElement.addTo(map);
        }
      }
    },
    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;
      if (map) {
        leafletElement.addTo(map);
      }

      // bind events
      // TODO warn if trying to bind an event that doesn't exist
      bindEvents(this, this.$leafletElement, this._events);
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
        const props = this.$props;
        const {
          latlng,
          ...options
        } = props;
        const newCircleMarker = new CircleMarker(latlng, options);
        return newCircleMarker;
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      },
    }
  };
</script>

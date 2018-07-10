<script>
  import { Circle }  from 'leaflet';
  import bindEvents from './util/bind-events';

  export default {
    props: [
      'latlng',
      'size',
      'color',
      'weight'
    ],
    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;
      if (map) {
        leafletElement.addTo(map);
      }

      // bind events

      // const CIRCLE_EVENTS = [
      //   'click',
      //   'dblclick',
      //   'mousedown',
      //   'mouseover',
      //   'mouseout',
      //   'contextmenu'
      // ];

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
        return new Circle(this.latlng, this.size, {
          color: this.color,
          weight: this.weight
        });
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      }
    }
  };
</script>

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
      'data'
    ],
    // computed: {
    //   activeFeature() {
    //     return this.$store.state.activeFeature;
    //   }
    // },
    // watch: {
    //   activeFeature(nextActiveFeature) {
    //     console.log('watch', nextActiveFeature);
    //     this.bringCircleMarkerToFront();
    //     //console.log(this.circleMarkers);
    //   }
    // },
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
        //this.$store.commit('setCircleMarkers', newCircleMarker);
        return newCircleMarker;
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      },
      // bringCircleMarkerToFront() {
      // // bringCircleMarkerToFront(circleMarker) {
      //   console.log('bringCircleMarkerToFront');
      //   // put marker on top
      //   // const el = circleMarker._path;
      //   //
      //   // // remove from parent
      //   // const group = circleMarker._renderer._rootGroup;
      //   // group.removeChild(el);
      //   //
      //   // // append to end (which brings it to the front)
      //   // group.appendChild(el);
      // },
    }
  };
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { CircleMarker }  from 'leaflet';
import bindEvents from './util/bind-events';

export default {
  name: 'CircleMarker',
  props: [
    'latlng',
    'radius',
    'fillColor',
    'color',
    'weight',
    'opacity',
    'fillOpacity',
    'data',
    'pane',
  ],
  watch: {
    latlng(nextLatlng) {
      console.log('watch circleMarker props latlng is running nextLatlng:', nextLatlng);
      this.$leafletElement._map.removeLayer(this.$leafletElement);
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;
      if (map) {
        leafletElement.addTo(map);
      }
      bindEvents(this, this.$leafletElement, this._events);
    },
  },
  mounted() {
    console.log('CircleMarker mounted is running');
    const leafletElement = this.$leafletElement = this.createLeafletElement();
    const map = this.$store.state.map.map;
    if (map) {
      // console.log('CircleMarker mounted if leafletElement:', leafletElement, 'map:', map);
      leafletElement.addTo(map);
    }

    // bind events
    // TODO warn if trying to bind an event that doesn't exist
    bindEvents(this, this.$leafletElement, this._events);
  },
  // updated() {
  //   console.log('CircleMarker updated is running');
  // },
  destroyed() {
    console.log('CircleMarker.vue destroyed is running');
    this.$leafletElement._map.removeLayer(this.$leafletElement);
  },
  methods: {
    createLeafletElement() {
      // console.log('CircleMarker.vue createLeafletElement is running');
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
      // bindEvents(this, this.$leafletElement, this._events);
    },
  },
  // we don't actually render anything, but need to define either a template
  // or a render function
  // render(h) {
  //   return;
  // },
};
</script>

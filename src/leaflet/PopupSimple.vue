<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { Popup, Point } from 'leaflet';
export default {
  name: 'PopupSimple',
  props: [
    'latlng',
    'featureId',
  ],
  computed: {
    _map() {
      return this.$store.state.map.map;
    },
  },
  mounted() {
    // console.log('popup mounted is running');
    const leafletElement = this.$leafletElement = this.createLeafletElement();
    leafletElement.addTo(this._map);
  },
  destroyed() {
    // console.log('pop-up destroyed is running')
    this.$leafletElement.removeFrom(this._map);
  },
  methods: {
    createLeafletElement() {
      const popup = new Popup({
        minWidth: 300,
        offset: new Point(0, -24),
      }).setLatLng(this.latlng)
        .setContent(this.$children[0].$el)
        .openOn(this._map);

      return popup;
    },
  },
};
</script>

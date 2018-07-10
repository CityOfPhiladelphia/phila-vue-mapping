/*
for publishing vue-leaflet-esri events to the host app. see main.js for usage.
*/

import Vue from 'vue';

// create a singleton event bus
const eventBus = new Vue();

export default (Vue) => {
  Vue.mixin({
    created() {
      this.$eventBus = eventBus;
    }
  });
};

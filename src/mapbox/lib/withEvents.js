export default {
  methods: {
    /**
     * Emit Vue event with additional data
     *
     * @param {string} name EventName
     * @param {Object} [data={}] Additional data
     */
    $_emitEvent(name, data = {}) {
      // console.log('$_emitEvent is running, name:', name, 'data:', data, 'this.map:', this.map);
      this.$emit(name, {
        map: this.map,
        component: this,
        ...data,
      });
    },

    /**
     * Emit Vue event with Mapbox event as additional data
     *
     * @param {Object} event
     */
    $_emitMapEvent(event, data = {}) {
      this.$_emitEvent(event.type, { mapboxEvent: event, ...data });
    },
  },
};

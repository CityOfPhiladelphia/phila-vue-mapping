<template>
  <div v-show="shouldShowOverlaySelectControl">
    <select 
      id="overlay-select" 
      @change="handleOverlayChange"
    >
      <option 
        v-for="overlay in Object.keys(overlays)"
        :id="overlay"
        :key="overlay"
      >
        {{ overlays[overlay].label }}
      </option>
    </select>
  </div>
</template>

<script>
import Control from '../leaflet/Control.vue';
const { props, methods } = Control;

export default {
  name: 'OverlaySelectControl',
  props: [
    'position',
  ],
  computed: {
    shouldShowOverlaySelectControl() {
      return this.$store.state.map.shouldShowOverlaySelectControl;
    },
    overlays() {
      return this.$config.map.tiledOverlays;
    },
    currentSelectedOverlay() {
      return this.$store.state.map.selectedOverlay;
    },
  },
  watch: {
    currentSelectedOverlay(nextCurrentOverlay) {
      const nextOverlay = nextCurrentOverlay.replace(/\D/g,'');
      const el = document.getElementById('overlay-select');
      el.value = nextOverlay;
    },
  },
  methods: Object.assign(methods, {
    handleOverlayChange() {
      const el = document.getElementById('overlay-select');
      const overlay = el.options[el.selectedIndex].id;
      this.$store.commit('setSelectedOverlay', overlay);
    },
  }),
};
</script>

<style scoped>

</style>

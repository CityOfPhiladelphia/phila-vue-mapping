<template>
  <div class="leaflet-bar easy-button-container leaflet-control">
    <button @click="handleBasemapToggleControlClick">
      <span class="button-state state-unnamed-state unnamed-state-active">
        <img
          :src="toggleButtonImgSrc"
          class="button-image"
          alt="Satellite Imagery"
        >
      </span>
      Satellite Imagery
    </button>
  </div>
</template>

<script>
import Control from '../leaflet/Control.vue';

const { props, methods } = Control;

export default {
  name: 'BasemapToggleControl',
  props: [
    'position',
  ],
  computed: {
    toggleButtonImgSrc() {
      const shouldShowBasemapSelectControl = this.$store.state.map.shouldShowBasemapSelectControl;
      let src;
      if (shouldShowBasemapSelectControl) {
        src = "images/basemap_small.png";
      } else {
        src = "images/imagery_small.png";
      }
      return src;
    },
  },
  methods: Object.assign(methods, {
    handleBasemapToggleControlClick(e) {
      // document.getElementById('addressSearch').blur();
      this.$emit('basemap-toggle-clicked');
      const prevShouldShowBasemapSelectControl = this.$store.state.map.shouldShowBasemapSelectControl;
      const nextShouldShowBasemapSelectControl = !prevShouldShowBasemapSelectControl;
      this.$store.commit('setShouldShowBasemapSelectControl', nextShouldShowBasemapSelectControl);
    },
  }),
};
</script>

<style scoped>
  .button-image {
    vertical-align: top;
  }
</style>

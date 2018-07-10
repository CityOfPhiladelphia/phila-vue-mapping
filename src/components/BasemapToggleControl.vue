<template>
  <div class="leaflet-bar easy-button-container leaflet-control">
    <button @click="handleImageryToggleButtonClick">
      <span class="button-state state-unnamed-state unnamed-state-active">
        <img class="button-image" :src="toggleButtonImgSrc">
      </span>
    </button>
  </div>
</template>

<script>
  import Control from '../leaflet/Control.vue';
  
  const {props, methods} = Control;

  export default {
    props: [
      'position'
    ],
    computed: {
      toggleButtonImgSrc() {
        const shouldShowImagery = this.$store.state.map.shouldShowImagery;
        let src;
        if (shouldShowImagery) {
          src = "../../src/assets/basemap_small.png"
        }
        else {
          src = "../../src/assets/imagery_small.png"
        }
        return src;
      },
    },
    methods: Object.assign(methods, {
      handleImageryToggleButtonClick(e) {
        const prevShouldShowImagery = this.$store.state.map.shouldShowImagery;
        const nextShouldShowImagery = !prevShouldShowImagery;
        this.$store.commit('setShouldShowImagery', nextShouldShowImagery);
      },
    })
  };
</script>

<style scoped>
  .button-image {
    vertical-align: top;
  }
</style>

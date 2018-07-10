<template>
  <!-- <div class="leaflet-bar easy-button-container leaflet-control"> -->
  <div class="leaflet-bar easy-button-container leaflet-control">
    <button :class="this.pictometryActive"
            @click.prevent="handleButtonClick"
    >
      <span class="button-state">
        <img class="button-image" :src="imgSrc">
      </span>
    </button>
  </div>
</template>

<script>
  import Control from '../leaflet/Control.vue';

  export default {
    extends: Control,
    // TODO figure how to extend props. sometimes it's an obj, sometimes an array.
    // props: Object.assign(props, {
    // }),
    props: [
      'link',
      'imgSrc'
    ],
    computed: {
      pictometryActive() {
        return this.$store.state.pictometry.active ? 'active' : 'inactive'
      }
    },
    methods: {
      handleButtonClick(e) {
        this.$store.commit('setPictometryActive', !this.$store.state.pictometry.active);
      },
    }
  };
</script>

<style scoped>

  .inactive {
    background-color: #ffffff;
  }
  .inactive:hover {
    background-color: #ffffff;
  }
  .active {
    background-color: rgb(243, 198, 19);
  }
  .active:hover {
    background-color: rgb(243, 198, 19);
  }

</style>

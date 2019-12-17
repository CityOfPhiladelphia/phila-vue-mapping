<template>
  <div class="leaflet-bar easy-button-container leaflet-control">
    <button
      :class="cyclomediaActive"
      class="cyclomedia-button"
      @click.prevent="handleButtonClick"
    >
      <span class="button-state">
        <img
          :src="imgSrc"
          class="button-image"
        >
      </span>
    </button>
  </div>
</template>

<script>
import Control from '../leaflet/Control.vue';
import CyclomediaRecordingsClient from './recordings-client';

export default {
  name: 'CyclomediaButton',
  extends: Control,
  // TODO figure how to extend props. sometimes it's an obj, sometimes an array.
  // props: Object.assign(props, {
  // }),
  props: [
    'link',
    'imgSrc',
  ],
  computed: {
    cyclomediaInitializationBegun() {
      return this.$store.state.cyclomedia.initializationBegun;
    },
    cyclomediaInitializationComplete() {
      return this.$store.state.cyclomedia.initializationComplete;
    },
    cyclomediaActive() {
      return this.$store.state.cyclomedia.active ? 'active' : 'inactive';
    },
  },
  created() {
    // create cyclomedia recordings client
    this.$cyclomediaRecordingsClient = new CyclomediaRecordingsClient(
      this.$config.cyclomedia.recordingsUrl,
      this.$config.cyclomedia.username,
      this.$config.cyclomedia.password,
      4326,
    );
  },
  methods: {
    handleButtonClick(e) {
      if (!this.cyclomediaInitializationBegun) {
        this.$store.commit('setCyclomediaInitializationBegun', true);
      }
      const willBeActive = !this.$store.state.cyclomedia.active;

      this.$store.commit('setCyclomediaActive', willBeActive);

      // if the cyclo viewer is off screen when it loads imagery, it won't
      // show anything even once it's on screen. use this to trigger an
      // update.

      // const viewer = this.$store.state.cyclomedia.viewer;
      //
      // if (willBeActive && viewer) {
      //   this.$nextTick(() => {
      //     viewer.forceUpdate();
      //   });
      // }

      // this.$emit('click');
    },
    // setNewLocation(latlng) {
    //   const viewer = this.$store.state.cyclomedia.viewer;
    //   const xy = [latlng.lng, latlng.lat];
    //   viewer.openByCoordinate(xy);
    // },
  },
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

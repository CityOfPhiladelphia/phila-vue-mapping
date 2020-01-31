<template>
  <div
    v-if="!isMobileOrTablet"
    id="toggle-tab"
    :style="{ top: buttonPosition }"
    class="toggle-tab"
    @click="handleFullScreenToggleButtonClick"
  >
    <span class="align-span">
      <font-awesome-icon
        :icon="currentIcon"
        class="fa-2x"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: 'FullScreenToggleTab',
  props: [
    'event',
    'deactivatedDirection'
  ],
  data() {
    return {
      'buttonPosition': 0,
      'buttonDirection': 'left',
      'activated': false,
    };
  },
  computed: {
    windowDim() {
      return this.$store.state.windowDimensions;
    },
    isMobileOrTablet() {
      return this.$store.state.isMobileOrTablet;
    },
    cyclomediaActive() {
      return this.$store.state.cyclomedia.active;
    },
    pictometryActive() {
      return this.$store.state.pictometry.active;
    },
    picOrCycloActive() {
      if (this.cyclomediaActive || this.pictometryActive) {
        return true;
      }
      return false;
    },
    currentIcon() {
      if (this.buttonDirection === 'right') {
        return 'caret-right';
      } else {
        return 'caret-left';
      }
    },
  },
  watch: {
    picOrCycloActive(value) {
      this.setDivHeight(this.windowDim);
    },
    fullScreenTopicsEnabled() {
      this.setDivHeight(this.windowDim);
    },
    windowDim(nextDim) {
      this.setDivHeight(nextDim);
    },
    activated(nextActivated) {
      console.log('watch activated, nextActivated:', nextActivated);
      if (nextActivated === false) {
        this.buttonDirection = this.deactivatedDirection;
      } else {
        this.buttonDirection = !this.deactivatedDirection;
      }
    }
  },
  mounted() {
    console.log('FullScreenToggleTab.vue mounted is running');
    this.setDivHeight(this.windowDim);
    if (this.$props.deactivatedDirection !== null) {
      console.log('FullScreenToggleTab.vue mounted IF is running');
      this.buttonDirection = this.$props.deactivatedDirection;
    }
  },
  methods: {
    setDivHeight(dim) {
      this.buttonPosition = (dim.height+100)/2 + 'px';
    },
    handleFullScreenToggleButtonClick() {
      // console.log('this.$props.event:', this.$props.event);
      this.activated = !this.activated;
      this.$emit(this.$props.event);
    },
  },
};
</script>

<style scoped>

  .toggle-tab {
    display: none;
    padding-top: 9px;
  }

  .align-span {
    margin-left: 6px;
  }

  @media screen and (min-width: 46.875em) {
    .toggle-tab {
      position: absolute;
      /* left: 0px; */
      border-width: 1.3px;
      border-style: solid;
      border-color: #CAC9C9;
      height: 48px;
      /* line-height: 56px; */
      width:24px;
      background-color: white;
      display: inline-block;
      z-index: 500;
      opacity: 0.7;
    }
  }

</style>

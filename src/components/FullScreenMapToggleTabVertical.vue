<template>
  <div
    v-if="!isMobileOrTablet"
    id="toggle-tab"
    :style="{ left: buttonPosition }"
    class="toggle-tab"
    @click="handleFullScreenMapToggleButtonClick"
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
  name: 'FullScreenMapToggleTabVertical',
  data() {
    return {
      'divWidth': 0,
      'buttonPosition': 0,
    };
  },
  computed: {
    fullScreenMapEnabled() {
      return this.$store.state.fullScreenMapEnabled;
    },
    fullScreenTopicsEnabled() {
      return this.$store.state.fullScreenTopicsEnabled;
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
      if (this.fullScreenMapEnabled) {
        return 'caret-up';
      }
      return 'caret-down';

    },
  },
  watch: {
    fullScreenTopicsEnabled() {
      this.setDivWidth();
    },
  },
  mounted() {
    window.addEventListener('resize', this.setDivWidth);
    this.setDivWidth();
  },
  methods: {
    setDivWidth() {
      const el = document.getElementById('map-tag');
      const divStyle = window.getComputedStyle(el);
      const divWidth = parseFloat(divStyle.getPropertyValue('width').replace('px', ''));
      this.buttonPosition = (divWidth-48)/2 + 'px';
    },
    handleFullScreenMapToggleButtonClick(e) {
      const prevFullScreenMapEnabled = this.$store.state.fullScreenMapEnabled;
      const nextFullScreenMapEnabled = !prevFullScreenMapEnabled;
      this.$store.commit('setFullScreenMapEnabled', nextFullScreenMapEnabled);
    },
  },
};
</script>

<style scoped>

  .toggle-tab {
    display: none;
  }

  .align-span {
    margin-left: 14px;
  }

  @media screen and (min-width: 46.875em) {
    .toggle-tab {
      position: absolute;
      bottom: 0px;
      border-width: 1.3px;
      border-style: solid;
      border-color: #CAC9C9;
      height: 24px;
      line-height: 16px;
      width:48px;
      background-color: white;
      display: inline-block;
      z-index: 500;
      opacity: 0.7;
      /* border-left-style: solid; */
      /* box-shadow: 2px 2px 7px grey; */
    }
  }

</style>

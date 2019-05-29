<template>
  <div id="toggle-tab"
       class="toggle-tab"
       :style="{ top: buttonPosition }"
       @click="handleFullScreenMapToggleButtonClick"
       v-if="!this.isMobileOrTablet"
  >
    <span class="align-span">
      <font-awesome-icon :icon="this.currentIcon" class="fa-2x" />
    </span>
  </div>
</template>

<script>
  export default {
    name: 'FullScreenMapToggleTab',
    data() {
      return {
        'buttonPosition': 0,
      }
    },
    mounted() {
      this.setDivHeight(this.windowDim);
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
      }
    },
    computed: {
      windowDim() {
        return this.$store.state.windowDimensions;
      },
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
        } else {
          return false;
        }
      },
      currentIcon() {
        if (this.fullScreenMapEnabled) {
          return 'caret-right'
        } else {
          return 'caret-left'
        }
      }
    },
    methods: {
      setDivHeight(dim) {
        if (this.$config.plugin) {
          if (this.$config.plugin.enabled === true) {
            this.buttonPosition = (this.$config.plugin.height-48)/2 + 'px';
            return;
          }
        }
        if (!this.picOrCycloActive) {
          this.buttonPosition = (dim.height-48)/2 + 'px';
        } else {
          this.buttonPosition = (dim.height-48)/4 + 'px';
        }
      },
      handleFullScreenMapToggleButtonClick(e) {
        const prevFullScreenMapEnabled = this.$store.state.fullScreenMapEnabled;
        const nextFullScreenMapEnabled = !prevFullScreenMapEnabled;
        this.$store.commit('setFullScreenMapEnabled', nextFullScreenMapEnabled);
      },
    }
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
      left: 0px;
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

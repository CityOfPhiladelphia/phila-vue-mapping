<template>
  <div
    v-show="!isMobileOrTablet"
    id="toggle-tab"
    :style="{ top: buttonTop, right: buttonRight, left: buttonLeft, position: buttonPosition }"
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
    'initialActivation',
    'deactivatedDirection',
    'buttonSide',
    'panel'
  ],
  data() {
    return {
      'buttonPosition': 'absolute',
      'buttonTop': 0,
      'buttonDirection': 'left',
      'activated': false,
      'buttonRight': null,
      'buttonLeft': null,
    };
  },
  computed: {
    windowDim() {
      return this.$store.state.windowDimensions;
    },
    isMobileOrTablet() {
      return this.$store.state.isMobileOrTablet;
    },
    fullScreenMapEnabled() {
      return this.$store.state.fullScreenMapEnabled;
    },
    fullScreenImageryEnabled() {
      return this.$store.state.fullScreenImageryEnabled;
    },
    currentIcon() {
      if (this.buttonDirection === 'right') {
        return 'caret-right';
      }
      return 'caret-left';
    },
  },
  watch: {
    fullScreenMapEnabled(nextFullScreenMapEnabled) {
      console.log('watch fullScreenMapEnabled:', nextFullScreenMapEnabled);
      if (this.$props.panel === 'map') {
        this.activated = nextFullScreenMapEnabled;
      }
    },
    fullScreenImageryEnabled(nextFullScreenImageryEnabled) {
      console.log('watch fullScreenImageryEnabled:', nextFullScreenImageryEnabled);
      if (this.$props.panel === 'imagery') {
        this.activated = nextFullScreenImageryEnabled;
      }
    },
    windowDim(nextDim) {
      this.setDivHeight(nextDim);
    },
    initialActivation(nextInitialActivation) {
      console.log('watch initialActivation is firing, nextInitialActivation:', nextInitialActivation);
    },
    activated(nextActivated) {
      console.log('watch activated, nextActivated:', nextActivated);
      if (nextActivated === false) {
        this.buttonDirection = this.$props.deactivatedDirection;
      } else {
        if (this.$props.deactivatedDirection === 'left') {
          this.buttonDirection = 'right';
        } else if (this.$props.deactivatedDirection === 'right') {
          this.buttonDirection = 'left';
        }
      }
    },
  },
  mounted() {
    console.log('FullScreenToggleTab.vue mounted is running, this.$props.initialActivation:', this.$props.initialActivation);
    this.setDivHeight(this.windowDim);
    this.$nextTick(() => {
      if (this.$props.initialActivation) {
        this.activated = true;
        if (this.$props.deactivatedDirection === 'left') {
          this.buttonDirection = 'right';
        } else if (this.$props.deactivatedDirection === 'right') {
          this.buttonDirection = 'left';
        }
      } else {
        // console.log('FullScreenToggleTab.vue mounted ELSE is running');
        this.buttonDirection = this.$props.deactivatedDirection;
      }
    });

    if (this.$props.buttonSide !== null) {
      if (this.$props.buttonSide === 'right') {
        this.buttonRight = '0px';
      } else if (this.$props.buttonLeft === 'left') {
        this.buttonLeft = '0px';
      }
    } else {
      this.buttonLeft = '0px';
    }

    if (this.$props.position !== null) {
      if (this.$props.position === 'relative') {
        this.buttonPosition = 'relative'
      }
    }
  },
  methods: {
    setDivHeight(dim) {
      if (this.buttonPosition)
      this.buttonTop = (dim.height - 70)/2 + 'px';
      // this.buttonTop = (dim.height+100)/2 + 'px';
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

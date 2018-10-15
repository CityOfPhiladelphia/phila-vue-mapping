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
    data() {
      return {
        'divHeight': 0,
        'buttonPosition': 0,
      }
    },
    mounted() {
      window.addEventListener('resize', this.setDivHeight);
      this.setDivHeight();
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
    watch: {
      picOrCycloActive(value) {
        // console.log('FullScreenMapToggleTab watch picOrCycloActive, value:', value);
        this.setDivHeight();
        // this.$nextTick(() => {
        //   this.$store.state.map.map.invalidateSize();
        // })
      },
      fullScreenTopicsEnabled() {
        this.setDivHeight();
      }
    },
    methods: {
      setDivHeight() {
        // console.log('FullScreenMapToggleTab setDivHeight is running');
        const el = document.getElementById('map-tag');
        const divStyle = window.getComputedStyle(el);
        const divHeight = parseFloat(divStyle.getPropertyValue('height').replace('px', ''));
        this.buttonPosition = (divHeight-48)/2 + 'px';
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

  /* .toggle-tab {
    position: absolute;
    left: 0px;
    border-width: 1.3px;
    border-color: #CAC9C9;
    height: 48px;
    line-height: 58px;
    width:24px;
    background-color: white;
    display: inline-block;
    z-index: 500; */
    /* border-left-style: solid; */
    /* box-shadow: 2px 2px 7px grey; */
  /* } */

  .toggle-tab {
    display: none;
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
      line-height: 56px;
      width:24px;
      background-color: white;
      display: inline-block;
      z-index: 500;
      opacity: 0.7;
      /* border-left-style: solid; */
      /* box-shadow: 2px 2px 7px grey; */
    }
  }

</style>

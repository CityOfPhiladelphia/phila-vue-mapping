<template>
  <div id="toggle-tab"
       class="toggle-tab"
       :style="{ top: buttonPosition }"
       @click="handleFullScreenMapToggleButtonClick"
       v-if="!this.isMobileOrTablet"
  >
    <span class="align-span">
      <i :class='this.currentIcon'></i>
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
          return 'fa fa-caret-right fa-2x'
        } else {
          return 'fa fa-caret-left fa-2x'
        }
      }
    },
    watch: {
      picOrCycloActive(value) {
        this.setDivHeight();
        // this.$nextTick(() => {
        //   this.$store.state.map.map.invalidateSize();
        // })
      }
    },
    methods: {
      setDivHeight() {
        const el = document.getElementById('map-tag');
        const divStyle = window.getComputedStyle(el);
        const divHeight = parseFloat(divStyle.getPropertyValue('height').replace('px', ''));
        this.divHeight = divHeight;
        // console.log('setDivHeight is running, divHeight:', divHeight);
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
      border-color: #CAC9C9;
      height: 48px;
      line-height: 58px;
      width:24px;
      background-color: white;
      display: inline-block;
      z-index: 500;
      /* border-left-style: solid; */
      /* box-shadow: 2px 2px 7px grey; */
    }
  }

</style>

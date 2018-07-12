<template>
  <!-- <section :class="['openmaps-about' ,'openmaps-modal', {'openmaps-modal--open': modals.about.open}]" -->
  <section :class="['openmaps-about' ,'openmaps-modal']"
           v-show="modals.help.open">
    <div @click="closeModal" class="openmaps-modal-close">
      <span class="button-state state-unnamed-state unnamed-state-active">
        <i class="fa fa-times fa-lg" aria-hidden="true"></i>
      </span>
    </div>
    <h2 class="text-center "><b>How to use OpenMaps</b></h2>
    <div class="openmaps-modal-content">
      <!-- <p>Turn on a layer</p> -->
      <div class="tour-tip" @mouseover="highlight('.openmaps-category-card')" @mouseleave="removeHighlight('.openmaps-category-card')">
        <div class="icon-div">
          <span>
            <i class="fa fa-filter fa-3x" aria-hidden="true"></i>
          </span>
        </div>
        <div class="text-div">
          <p class="tour-tip__action"><b>Filter the list of layers available in the left panel.</b></p>
          <p class="tour-tip__result text-nopad">Type in the box for the first filter to filter by text.  Select a category from the second filter to filter by category.</p>
        </div>
      </div>

      <div class="tour-tip" @mouseover="highlight('.label-text')" @mouseleave="removeHighlight('.label-text')">
        <div class="icon-div">
          <span>
            <i class="fa fa-check-square fa-3x" aria-hidden="true"></i>
          </span>
        </div>
        <div class="text-div">
          <p class="tour-tip__action"><b>Toggle on and off map layers by clicking on the checkboxes in the layer panel.</b></p>
          <p class="tour-tip__result text-nopad">You can toggle on as many layers as you want, and they will all show on the map.</p>
        </div>
      </div>

      <div class="tour-tip" @mouseover="highlight('.label-text')" @mouseleave="removeHighlight('.label-text')">
        <div class="icon-div">
          <span>
            <i class="fa fa-square-o fa-3x" aria-hidden="true"></i>
          </span>
        </div>
        <div class="text-div">
          <p class="tour-tip__action"><b>If a checkbox is grayed out, zoom in further on the map and it will become active.</b></p>
          <p class="tour-tip__result text-nopad">Many of the layers will not show when the map is zoomed out too far.</p>
        </div>
      </div>

      <div class="tour-tip" @mouseover="highlight('.label-text')" @mouseleave="removeHighlight('.label-text')">
        <div class="icon-div">
          <span>
            <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>
          </span>
        </div>
        <div class="text-div">
          <p class="tour-tip__action"><b>Click on any feature that appears on the map to get a popup with that feature's info.</b></p>
          <p class="tour-tip__result text-nopad">If you have turned on overlapping layers, you will be able to click through multiple popups of info.</p>
        </div>
      </div>

      <div class="tour-tip" @mouseover="highlight('.openmaps-category-card')" @mouseleave="removeHighlight('.openmaps-category-card')">
        <div class="icon-div">
          <span>
            <i class="fa fa-search fa-3x" aria-hidden="true"></i>
          </span>
        </div>
        <div class="text-div">
          <p class="tour-tip__action"><b>Search for an address or intersection.</b></p>
        <p class="tour-tip__result text-nopad">The map will move to the location that you have searched</p>
        </div>
      </div>

      <div class="tour-tip" @mouseover="highlight('.openmaps-category-card')" @mouseleave="removeHighlight('.openmaps-category-card')">
        <div class="icon-div">
          <span>
            <img class="street-view-image" :src="'../../src/assets/cyclomedia_blue.png'">
          </span>
          <!-- <span>
            <i class="fa fa-search fa-3x" aria-hidden="true"></i>
          </span> -->
        </div>
        <div class="text-div">
          <p class="tour-tip__action"><b>Toggle on and off street view</b></p>
        <p class="tour-tip__result text-nopad">Half of the map panel will be taken up by the street view. If you are zoomed in far enough, circles will appear along the streets in the map.  Click on a circle to change the street view location to that point.</p>
        </div>
      </div>

      <div class="tour-tip" @mouseover="highlight('.openmaps-category-card')" @mouseleave="removeHighlight('.openmaps-category-card')">
        <div class="icon-div">
          <span>
            <i class="fa fa-info-circle fa-3x" aria-hidden="true"></i>
          </span>
        </div>
        <div class="text-div">
          <p class="tour-tip__action"><b>Learn more about and download data.</b></p>
        <p class="tour-tip__result text-nopad">Click this icon to be linked to the metadata page for any dataset.</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
// import {mapState} from 'vuex'
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
/**
 * HOW TO USE THE FINDER MODAL
 *
 * Hightlights certain elements of the interface on keyword hover.
 *
 * @since 0.6.22
 */
export default {

  name: 'Modal-About',
  // components: {FontAwesomeIcon},
  computed: {
    // route() {
    //   return this.$store.state.route;
    // },
    shouldBeOpen() {
      if (this.route === 'help') {
        return true;
      } else {
        return false;
      }
    },
    modals() {
      return this.$store.state.modals;
    }
    // ...mapState(['modals'])
  },
  methods: {
    closeModal () {
      const firstLoc = window.location.hash;
      let firstLocArr = firstLoc.split('/').slice(1);
      console.log('firstLocArr:', firstLocArr);
      const helpPos = firstLocArr.indexOf('help');
      firstLocArr = firstLocArr.slice(helpPos+1, helpPos+2);
      console.log('firstLocArr:', firstLocArr);
      let lastHash = '#';
      for (let hashPart of firstLocArr) {
        lastHash = lastHash + '/' + hashPart;
      }
      window.location.hash = lastHash;
      // this.$store.commit('setDidToggleModal', { name: 'help', open: false });
    },
    highlight (selector) {
      let el = document.querySelectorAll(selector)[0]
      // el.classList.add('tour-highlight')
    },
    removeHighlight (selector) {
      let el = document.querySelectorAll(selector)[0]
      // el.classList.remove('tour-highlight')
    }
  }
}
</script>

<style scoped>
/* <style lang="scss" scoped> */

.icon-div {
  margin: 10px;
}

.text-div {

}

.street-view-image {
  height: 40px;
  width: 73px;
  color: blue;
}

.openmaps-modal {
  color: rgb(15, 77, 144);
  width: 97%;
  height: 80%;
  padding: 20px;
  overflow: hidden;
  position: absolute;
  top: 70px;
  left: 10px;
  background: white;
  z-index:1000;
  opacity: 0.85;
}

/* .modal-content {
  overflow-y: auto;
} */

.openmaps-modal.openmaps-modal--open{
  z-index:1000;
  /* border-left: 3px solid color(ghost-gray); */
  opacity: 1;
}

.openmaps-modal-content{
  width: 95%;
  height: 85%;
  margin: 20px auto;
  overflow-y: auto;
}

.openmaps-modal-close{
  position: absolute;
  top:15px;
  left:15px;
  background: white;
  height: 30px;
  width: 30px;
}


/* @include breakpoint(medium down) {
  .openmaps-modal{
    position:fixed;
    width: 100%;
    height:calc(100vh - #{$header-height-mobile});
    left:0;
    top: $header-height-mobile;
    background: $white;
    padding:10%;
  }
  .openmaps-modal-content{
    width: 100%;
  }
  .openmaps-modal-close{
    position: absolute;
    top:15px;
    left:15px;
  }
} */

</style>

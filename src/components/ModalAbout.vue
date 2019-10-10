<template>
  <!-- <section :class="['openmaps-about' ,'openmaps-modal', {'openmaps-modal--open': modals.about.open}]" -->
  <section 
    v-show="modals.open === 'help'"
    :class="['openmaps-about' ,'openmaps-modal']"
  >
    <div 
      class="openmaps-modal-close" 
      @click="closeModal"
    >
      <span class="button-state state-unnamed-state unnamed-state-active">
        <font-awesome-icon 
          icon="times" 
          class="fa-lg" 
          aria-hidden="true"
        />
      </span>
    </div>
    <h2 class="text-center ">
      <b>How to use OpenMaps</b>
    </h2>
    <div class="openmaps-modal-content">
      <!-- <p>Turn on a layer</p> -->
      <div 
        class="tour-tip" 
        @mouseover="highlight('.openmaps-category-card')" 
        @mouseleave="removeHighlight('.openmaps-category-card')"
      >
        <div class="icon-div">
          <span>
            <font-awesome-icon 
              icon="filter" 
              class="fa-3x" 
              aria-hidden="true"
            />
          </span>
        </div>
        <div class="text-div">
          <p class="tour-tip__action">
            <b>Filter the list of layers available in the left panel.</b>
          </p>
          <p class="tour-tip__result text-nopad">
            Type in the box for the first filter to filter by text.  Select a category from the second filter to filter by category.
          </p>
        </div>
      </div>

      <div 
        class="tour-tip" 
        @mouseover="highlight('.label-text')" 
        @mouseleave="removeHighlight('.label-text')"
      >
        <div class="icon-div">
          <span>
            <font-awesome-icon 
              icon="check-square" 
              class="fa-3x" 
              aria-hidden="true"
            />
          </span>
        </div>
        <div class="text-div">
          <p class="tour-tip__action">
            <b>Toggle on and off map layers by clicking on the checkboxes in the layer panel.</b>
          </p>
          <p class="tour-tip__result text-nopad">
            You can toggle on as many layers as you want, and they will all show on the map.
          </p>
        </div>
      </div>

      <div 
        class="tour-tip" 
        @mouseover="highlight('.label-text')" 
        @mouseleave="removeHighlight('.label-text')"
      >
        <div class="icon-div">
          <span>
            <font-awesome-icon 
              :icon="['fal', 'square']" 
              class="fa-3x" 
              aria-hidden="true"
            />
          </span>
        </div>
        <div class="text-div">
          <p class="tour-tip__action">
            <b>If a checkbox is grayed out, zoom in further on the map and it will become active.</b>
          </p>
          <p class="tour-tip__result text-nopad">
            Many of the layers will not show when the map is zoomed out too far.
          </p>
        </div>
      </div>

      <div 
        class="tour-tip" 
        @mouseover="highlight('.label-text')" 
        @mouseleave="removeHighlight('.label-text')"
      >
        <div class="icon-div">
          <span>
            <font-awesome-icon 
              icon="map-marker-alt" 
              class="fa-3x" 
              aria-hidden="true"
            />
          </span>
        </div>
        <div class="text-div">
          <p class="tour-tip__action">
            <b>Click on any feature that appears on the map to get a popup with that feature's info.</b>
          </p>
          <p class="tour-tip__result text-nopad">
            If you have turned on overlapping layers, you will be able to click through multiple popups of info.
          </p>
        </div>
      </div>

      <div 
        class="tour-tip" 
        @mouseover="highlight('.openmaps-category-card')" 
        @mouseleave="removeHighlight('.openmaps-category-card')"
      >
        <div class="icon-div">
          <span>
            <font-awesome-icon 
              icon="search" 
              class="fa-3x" 
              aria-hidden="true"
            />
          </span>
        </div>
        <div class="text-div">
          <p class="tour-tip__action">
            <b>Search for an address or intersection.</b>
          </p>
          <p class="tour-tip__result text-nopad">
            The map will move to the location that you have searched
          </p>
        </div>
      </div>

      <div 
        class="tour-tip" 
        @mouseover="highlight('.openmaps-category-card')" 
        @mouseleave="removeHighlight('.openmaps-category-card')"
      >
        <div class="icon-div">
          <span>
            <img 
              :src="'images/cyclomedia_blue.png'" 
              class="street-view-image"
            >
          </span>
        </div>
        <div class="text-div">
          <p class="tour-tip__action">
            <b>Toggle on and off street view</b>
          </p>
          <p class="tour-tip__result text-nopad">
            Half of the map panel will be taken up by the street view. If you are zoomed in far enough, circles will appear along the streets in the map.  Click on a circle to change the street view location to that point.
          </p>
        </div>
      </div>

      <div 
        class="tour-tip" 
        @mouseover="highlight('.openmaps-category-card')" 
        @mouseleave="removeHighlight('.openmaps-category-card')"
      >
        <div class="icon-div">
          <span>
            <font-awesome-icon 
              icon="info-circle" 
              class="fa-3x" 
              aria-hidden="true"
            />
          </span>
        </div>
        <div class="text-div">
          <p class="tour-tip__action">
            <b>Learn more about and download data.</b>
          </p>
          <p class="tour-tip__result text-nopad">
            Click this icon to be linked to the metadata page for any dataset.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'ModalAbout',
  computed: {
    shouldBeOpen() {
      if (this.route === 'help') {
        return true;
      } 
      return false;
      
    },
    modals() {
      return this.$store.state.modals;
    },
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
    },
    highlight (selector) {
      let el = document.querySelectorAll(selector)[0];
    },
    removeHighlight (selector) {
      let el = document.querySelectorAll(selector)[0];
    },
  },
};
</script>

<style scoped>

.icon-div {
  margin: 10px;
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

.openmaps-modal.openmaps-modal--open{
  z-index:1000;
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

</style>

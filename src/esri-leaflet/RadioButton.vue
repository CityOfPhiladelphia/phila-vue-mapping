<template>
  <div>
    <div class="div-row">
      <a
        v-if="shouldShowDataLink"
        :href="'http://metadata.phila.gov/#home/representationdetails/' + bennyId"
        target="_blank"
      >
        <span><font-awesome-icon
          icon="info-circle"
          class="fa-2x"
        /></span>
      </a>
      <input
        :id="'radio-'+layerName"
        :value="layerId"
        :class="{ disabled: shouldBeDisabled }"
        :layerid="layerId"
        :checked="webMapActiveLayers.includes(layerName)"
        type="radio"
        @click="radioToggle"
      >

      <label
        :for="'radio-'+layerName"
        :class="{ disabled: shouldBeDisabled, 'label-text': shouldShowDataLink, 'label-text-no-datalinks': !shouldShowDataLink }"
      >
        <div class="layer-name">{{ layerName }}</div>
      </label>
    </div>

    <legend-box
      v-if="this.$store.state.map.webMapActiveLayers.includes(layerName)"
      :layer="layer"
      :layer-name="layerName"
      :layer-id="layerId"
      :layer-definition="layerDefinition"
      :legend="legend"
      :scales="this.$config.map.scales"
    />
    <slider
      v-if="this.$store.state.map.webMapActiveLayers.includes(layerName)"
      :layer="layer"
      :layer-name="layerName"
      :layer-id="layerId"
      :opacity="opacity"
    />
  </div>
</template>

<script>
import TopicComponent from './TopicComponent.vue';
import LegendBox from './LegendBox.vue';
import Slider from './Slider.vue';

export default {
  components: {
    LegendBox,
    Slider,
  },
  props: [ 'layer',
    'layerName',
    'layerId',
    // minScale, maxScale, and drawingInfo are stored in layerDefinition
    'layerDefinition',
    'opacity',
    'legend',
    'tags',
    'topicLayers',
    'shouldShowDataLinks',
  ],
  data() {
    return {
      opa: this.$props.opacity * 100,
    };
  },
  computed: {
    matchingTags() {
      let matches = [];
      if (this.$props.tags !== null && this.inputTagsFilter !== '') {
        for (let tag of this.$props.tags) {
          if (tag.toLowerCase().includes(this.inputTagsFilter.toLowerCase())) {
            matches.push(tag);
          }
        }
      }
      return matches;
    },
    inputTagsFilter() {
      return this.$store.state.layers.inputTagsFilter;
    },
    scale() {
      return this.$store.state.map.scale;
    },
    shouldBeDisabled() {
      const def = this.$props.layerDefinition;
      let value;
      if (def) {
        if (def.minScale) {
          if (this.scale > def.minScale) {
            value = true;
            // return true;
          }
          value = false;
          // return false;
        }
      } else {
        value = false;
        // return false;
      }
      return value;
    },
    layerUrls() {
      return this.$store.state.layers.layerUrls;
    },
    bennyEndpoints() {
      return this.$store.state.bennyEndpoints;
    },
    url() {
      return this.layerUrls[this.$props.layerName];
    },
    shouldShowDataLink() {
      if (this.bennyId && this.$props.shouldShowDataLinks) {
        return true;
      }
      return false;

    },
    bennyId() {
      if (Object.keys(this.bennyEndpoints).length > 0) {
        const id = this.bennyEndpoints[this.url];
        return id;
      }
      return ' ';

    },
    webMapUrlLayer() {
      return this.$store.state.map.webMapUrlLayer;
    },
    webMapActiveLayers() {
      return this.$store.state.map.webMapActiveLayers;
    },
    webMapDisplayedLayers() {
      return this.$store.state.map.webMapDisplayedLayers;
    },
    webMapGeoJson() {
      return this.$store.state.map.webMapGeoJson;
    },
  },
  watch: {
    opa(nextOpacity) {
      const payload = {
        layerName: this.$props.layerName,
        opa: nextOpacity/100,
      };
      // console.log('OPACITY CHANGED', payload);
      this.$store.commit('setWebMapLayersOpacity', payload);
    },
    shouldBeDisabled(nextShouldBeDisabled) {
      // console.log('watch shouldBeDisabled is firing:', this.$props.layerName, nextShouldBeDisabled);
      if (this.webMapActiveLayers.includes(this.$props.layerName) && nextShouldBeDisabled === true) {
        this.removeFromWebMapDisplayedLayers();
      } else if (this.webMapActiveLayers.includes(this.$props.layerName) && nextShouldBeDisabled === false) {
        this.addToWebMapDisplayedLayers();
      }
    },
  },
  methods: {
    trim(s) {
      return ( s || '' ).replace( /^\s+|\s+$/g, '' );
    },
    radioToggle(e) {
      // console.log('radioToggle', e.target, e.target.id, e.target.checked, this.$props.topicLayers);
      const urlLayer = this.webMapUrlLayer;
      const activeLayers = this.webMapActiveLayers;
      const displayedLayers = this.webMapDisplayedLayers;
      const targetReplace = e.target.id.replace('radio-', '');
      for (let layer of this.$props.topicLayers) {
        if (layer === targetReplace) {
          // console.log('target checked, targetReplace:', targetReplace);
          activeLayers.push(layer);
          displayedLayers.push(layer);
          if (activeLayers.length === 1) {
            this.$store.commit('setWebMapUrlLayer', layer);
          }
        } else {
          // console.log('target not checked');
          const activeIndex = activeLayers.indexOf(layer);
          if (activeIndex >= 0) {
            activeLayers.splice(activeIndex, 1);
          }
          const displayedIndex = displayedLayers.indexOf(layer);
          if (displayedIndex >= 0) {
            displayedLayers.splice(displayedIndex, 1);
          }
          if (urlLayer === layer) {
            this.$store.commit('setWebMapUrlLayer', null);
          }
        }
      }
      this.$store.commit('setWebMapActiveLayers', activeLayers);
      this.$store.commit('setWebMapDisplayedLayers', displayedLayers);
    },
    removeFromWebMapDisplayedLayers() {
      const displayedLayers = this.webMapDisplayedLayers;
      const index = displayedLayers.indexOf(this.$props.layerName);
      if (index >= 0) {
        displayedLayers.splice(index, 1);
      }
      this.$store.commit('setWebMapDisplayedLayers', displayedLayers);
    },
    addToWebMapDisplayedLayers() {
      const displayedLayers = this.webMapDisplayedLayers;
      displayedLayers.push(this.$props.layerName);
      this.$store.commit('setWebMapDisplayedLayers', displayedLayers);
    },
  },
};
</script>

<style scoped>

  .sliderDiv {
    height: 60px;
  }

  .flex {
    margin-bottom: 16px;
  }

  .metadata-link {
    display: inline-block;
    height: 10px;
    width: 10px;
    /*border: solid;
    border-width: 1px;*/
  }

  .download-select {
    width: 200px;
  }

  .div-row {
    position: relative;
    margin-bottom: 12px;
  }

  /* input[type="radio"] {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    margin-top: -10px;
    margin-left: 32px;
    cursor: pointer;
  } */

  a {
    position: absolute;
    /* top: 50%; */
    /* margin-top: -10px; */
    /*margin-left: 25px;*/
  }

  input[type=radio]+label[for] {
    font-size: 16px;
  }

  input[type=radio]+label::before {
    position: absolute;
    margin-left: 5px;
    margin-top: -4px;
    font-size: 20px;
    padding-right: 5px;
  }

  .disabled {
    color: #d3d3d3 !important;
  }

  input[type=radio]+label.disabled::before {
    color: #d3d3d3;
  }

  .label-text-no-datalinks {
    /* position: absolute; */
    display: inline-block;
    /* margin-top: 4px; */
    margin-left: 0px;
  }

  .label-text {
    /* position: absolute; */
    display: inline-block;
    /* margin-top: 4px; */
    margin-left: 0px;
    padding-left: 30px;
  }

  .layer-name {
    font-weight: normal;
    vertical-align: middle;
    display: inline-block;
    margin-left: 30px;
    margin-bottom: 6px;
  }

  .tag-title {
    padding-left: 30px;
    font-weight: normal;
    font-style: italic;
    font-size: 14px;
    color: red;
  }

  .tag-holder {
    /* display: inline-block; */
    padding-left: 30px;
    font-weight: normal;
    font-size: 14px;
    color: red;
  }


</style>

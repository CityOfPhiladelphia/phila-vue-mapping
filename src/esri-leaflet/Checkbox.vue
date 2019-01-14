<template>
  <div>
    <div class="div-row">
    <!-- <div class="input-group"> -->
    <!-- <li> -->
      <a :href="'http://metadata.phila.gov/#home/representationdetails/' + this.bennyId"
         target="_blank"
         v-if="bennyId"
      >
        <span><font-awesome-icon icon="info-circle" class="fa-2x" /></span>
      </a>
      <!-- <input :id="'checkbox-'+layerName"
             type="checkbox"
      > -->
      <!-- :layerid="layerId"
      :checked="webMapActiveLayers.includes(layerName)"
      @click="checkboxToggle"
      :class="{ disabled: shouldBeDisabled }" -->
      <input :id="'checkbox-'+layerName"
             :class="{ disabled: shouldBeDisabled }"
             type="checkbox"
             :layerid="layerId"
             :checked="webMapActiveLayers.includes(layerName)"
             @click="checkboxToggle"
      >
      <!-- :disabled="shouldBeDisabled" -->
      <label :for="'checkbox-'+layerName"
             :class="{ disabled: shouldBeDisabled, 'label-text': true }"
      >
        <div class="layer-name">{{ layerName }}</div>
        <!-- <div class="tag-title"
             v-if="matchingTags.length > 0"
        >
          Matching Tags:
        </div>
        <div class="tag-holder"
             v-if="matchingTags.length > 0"
             v-for="matchingTag in matchingTags"
        >
          {{ matchingTag }}
        </div> -->
      </label>
      <!-- <div class="layer-name">{{layerName}}</div> -->
    </div>
    <legend-box v-if="this.$store.state.map.webMapActiveLayers.includes(layerName)"
                :layer="layer"
                :layerName="layerName"
                :layerId="layerId"
                :layerDefinition="layerDefinition"
                :legend="legend"
                :scales="this.$config.map.scales"
      >
    </legend-box>
    <slider v-if="this.$store.state.map.webMapActiveLayers.includes(layerName)"
            :layer="layer"
            :layerName="layerName"
            :layerId="layerId"
            :opacity="opacity"
    >
    </slider>
  </div>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';
  import LegendBox from './LegendBox.vue';
  import Slider from './Slider.vue';

  export default {
    components: {
      LegendBox,
      Slider
    },
    props: ['layer',
            'layerName',
            'layerId',
            // minScale, maxScale, and drawingInfo are stored in layerDefinition
            'layerDefinition',
            'opacity',
            'legend',
            'tags'
    ],
    data() {
      return {
        opa: this.$props.opacity * 100
      }
    },
    watch: {
      opa(nextOpacity) {
        const payload = {
                          layerName: this.$props.layerName,
                          opa: nextOpacity/100
                        }
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
      // inputTagsFilter(nextInputTagsFilter) {
      //   this.findCurrentTags(nextInputTagsFilter);
      // },
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
        const def = this.$props.layerDefinition
        if (def) {
          if (def.minScale) {
            if (this.scale > def.minScale) {
              return true;
            } else {
              return false;
            }
          }
        } else {
          return false;
        }
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
      bennyId() {
        if (Object.keys(this.bennyEndpoints).length > 0) {
          const id = this.bennyEndpoints[this.url];
          // const id = this.bennyEndpoints[this.url]['Metadata'];
          return id;
        } else {
          return ' ';
        }
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
      }
    },
    methods: {
      // findCurrentTags(inputTagsFilter) {
      //
      // },
      trim(s) {
        return ( s || '' ).replace( /^\s+|\s+$/g, '' );
      },
      // getGeoJson(layer) {
      //   const layer2 = 'services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/WasteBaskets_Big_Belly/FeatureServer/0'
      //   // const url = 'http://' + layer2;
      //   const url = 'http://' + this.layerUrls[layer];
      //   console.log('getGeoJson is running, layer:', layer, 'url:', url);
      //   const dataQuery = L.esri.query({ url });
      //   dataQuery.where("1=1");
      //   dataQuery.run((function(error, featureCollection, response) {
      //     // console.log('parcelQuery ran, activeParcelLayer:', activeParcelLayer);
      //     this.didGetData(error, featureCollection, response, layer);
      //   }).bind(this)
      // )
      // },
      // didGetData(error, featureCollection, response, layer) {
      //   console.log('didGetData is running, layer:', layer, 'featureCollection:', featureCollection, 'response:', response);
      //   // const obj = {
      //   //   'layerName': layer,
      //   //   'json': response
      //   let obj = this.webMapGeoJson;
      //   obj[layer] = response;
      //   this.$store.commit('setWebMapGeoJson', obj);
      // },
      checkboxToggle(e) {
        console.log('checkboxToggle', e.target, e.target.id, e.target.checked);
        const urlLayer = this.webMapUrlLayer;
        const activeLayers = this.webMapActiveLayers;
        const displayedLayers = this.webMapDisplayedLayers;
        // const splitArray = e.target.id.split('-').splice(0, 1);
        const targetReplace = e.target.id.replace('checkbox-', '');
        if (e.target.checked) {
          console.log('target checked, targetReplace:', targetReplace);
          activeLayers.push(targetReplace);
          displayedLayers.push(targetReplace);
          // activeLayers.push(e.target.id.split('-')[1]);
          // displayedLayers.push(e.target.id.split('-')[1]);
          if (activeLayers.length === 1) {
            this.$store.commit('setWebMapUrlLayer', targetReplace);
            // this.$controller.handleCheckboxClick(targetReplace);
          }
          // if (!Object.keys(this.webMapGeoJson).includes(targetReplace)) {
          //   this.getGeoJson(targetReplace);
          // }
        } else {
          console.log('target not checked');
          const activeIndex = activeLayers.indexOf(targetReplace);
          // const activeIndex = activeLayers.indexOf(e.target.id.split('-')[1]);
          if (activeIndex >= 0) {
            activeLayers.splice(activeIndex, 1);
          }
          const displayedIndex = displayedLayers.indexOf(targetReplace);
          // const displayedIndex = displayedLayers.indexOf(e.target.id.split('-')[1]);
          if (displayedIndex >= 0) {
            displayedLayers.splice(displayedIndex, 1);
          }
          // this.$store.commit('setIntersectingFeatures', []);
          if (urlLayer === targetReplace) {
            this.$store.commit('setWebMapUrlLayer', null);
            // this.$controller.handleCheckboxUnClick(targetReplace);
          }
        }
        this.$store.commit('setWebMapActiveLayers', activeLayers);
        this.$store.commit('setWebMapDisplayedLayers', displayedLayers);
      },
      removeFromWebMapDisplayedLayers() {
        const displayedLayers = this.webMapDisplayedLayers;
        const index = displayedLayers.indexOf(this.$props.layerName);
        // console.log('layer', this.$props.layerName, 'is active, but now should not be displayed, index:', index);
        if (index >= 0) {
          displayedLayers.splice(index, 1);
        }
        this.$store.commit('setWebMapDisplayedLayers', displayedLayers);
      },
      addToWebMapDisplayedLayers() {
        // console.log('layer', this.$props.layerName, 'is active, and now should be displayed');
        const displayedLayers = this.webMapDisplayedLayers;
        displayedLayers.push(this.$props.layerName);
        this.$store.commit('setWebMapDisplayedLayers', displayedLayers);
      }
    }
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

  /* input[type="checkbox"] {
    width: 25px;
    height: 25px;
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

  input[type=checkbox]+label[for] {
    font-size: 16px;
  }

  input[type=checkbox]+label::before {
    position: absolute;
    margin-top: -12px;
    font-size: 30px;
    padding-right: 5px;
  }

  .disabled {
    color: #d3d3d3 !important;
  }

  input[type=checkbox]+label.disabled::before {
    color: #d3d3d3;
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

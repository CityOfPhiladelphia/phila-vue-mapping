<template>
  <div>
    <slot />
  </div>
</template>

<script>
  import axios from 'axios';
  import generateUniqueId from '../util/unique-id';
  import * as LEsriWebMap from 'L-esri-WebMap'

  export default {
    name: 'WebMap',
    computed: {
      webmapId() {
        // console.log('config', this.$config);
        return this.$config.webmapId;
      },
      defaultLayers() {
        return this.$store.state.layers.defaultLayers;
      }
    },
    methods: {
      parentMounted(parent) {
        const self = this;
        const map = this.$store.state.map.map;

        const esriUrl = "https://www.arcgis.com/sharing/rest/content/items/"+ this.webmapId +"/data";
        const params = {
          dataType: 'json',
          webmapId: this.webmapId
        }
        let webMapLayersAndRest = []

        axios.get(esriUrl, { params }).then(response => {
          const restData = response.data;
          let webMap;
          if (this.$config.bundled) {
            webMap = this.$webMap = LEsriWebMap.webMap(this.webmapId, { map: map });
          } else {
            webMap = this.$webMap = L.esri.webMap(this.webmapId, { map: map });
          }

          // console.log('WEBMAP', webMap, 'restData', restData);
          self.$store.commit('setWebMap', webMap);

          webMap.on('load', function() {

            map.attributionControl.setPrefix('<a target="_blank" href="//www.phila.gov/it/aboutus/units/Pages/GISServicesGroup.aspx">City of Philadelphia | CityGeo</a>');

            const ignore = ["CityBasemap", "CityBasemap_Labels"];

            // create layerUrls - object mapping layerName to url
            let layerUrls = {};
            for (let layer of webMap.layers) {
              // console.log('layer.title:', layer.title);
              const title = layer.title
              if (!ignore.includes(title)) {
                if (title.includes('_')) {
                  const curLayer = title.split('_')[1];
                  if (layer.layer.service) {
                    // console.log('good', title, layer.layer.service.options.url.replace('https://', '').replace('http://', '').replace(/\/$/, "").toLowerCase());
                    layerUrls[curLayer]=layer.layer.service.options.url.replace('https://', '').replace('http://', '').replace(/\/$/, "").toLowerCase();
                  } else if (layer.layer._layers){
                    // console.log('bad1, then good', title, layer.layer._layers[Object.keys(layer.layer._layers)[0]].service.options.url.replace('https://', '').replace('http://', '').replace(/\/$/, "").toLowerCase());
                    layerUrls[curLayer]=layer.layer._layers[Object.keys(layer.layer._layers)[0]].service.options.url.replace('https://', '').replace('http://', '').replace(/\/$/, "").toLowerCase();
                  } else {
                    // console.log('still bad', title, layer);
                  }
                }
              }
            }
            self.$store.commit('setLayerUrls', layerUrls);

            // create webMapLayersAndRest
            // let webMapLayersAndRest = []
            const opLayers = restData.operationalLayers
            // console.log('opLayers:', opLayers, 'webMap.layers:', webMap.layers);

            // start of for loop
            for (let layer of webMap.layers) {
            // for (let [index, layer] of webMap.layers.splice(1).entries()) {
              if (layer.title === 'CityBasemap' || layer.title === 'CityBasemap_Labels' || layer.title === 'CityBasemap_World' || layer.title === 'CityBasemap_Labels_World') {
                continue;
              }
              // console.log('in EsriWebMap loop, layer.title.split("_")[1]:', layer.title.split('_')[1], 'self.defaultLayers:', self.defaultLayers);
              let curOpLayer;
              for (let opLayer of opLayers) {
                // console.log('opLayer.title:', opLayer.title, 'layer.title:', layer.title);
                if (opLayer.title === layer.title) {
                  curOpLayer = opLayer
                }
              }

              // console.log('cupOpLayer:', curOpLayer);
              const webmapMetaDataRequestUrl = 'https://www.arcgis.com/sharing/rest/content/items/' + curOpLayer.itemId;
              const id = generateUniqueId();
              let layerObj = {
                'category': layer.title.split('_')[0],
                'title': layer.title.split('_')[1],
                'layer': layer.layer,
                'id': id,
                'serviceItemId': null,
                // 'serviceItemId': curOpLayer.itemId,
                'rest': curOpLayer,
                'opacity': curOpLayer.opacity,
                'type': curOpLayer.layerType,
                'type2': layer.type,
                'legend': null,
                'tags': null,
                'tagsString': null,
              }

              const params2 = {}

              if (curOpLayer.itemId){

                L.esri.request(webmapMetaDataRequestUrl, params2, function (error, response) {
                  if (error) {
                    // console.log('L.esri.request ERROR:', error, 'webmapMetaDataRequestUrl:', webmapMetaDataRequestUrl, 'layerObj:', layerObj);
                    webMapLayersAndRest.push(layerObj);
                    webMapLayersAndRest.sort(function(a, b) {
                      const titleA = a.title.toLowerCase()
                      const titleB=b.title.toLowerCase()
                      if (titleA < titleB) //sort string ascending
                      return -1
                      if (titleA > titleB)
                      return 1
                      return 0 //default return value (no sorting)
                    })

                  } else {
                    // console.log('WebMap MetaData:', response);
                    const tags = response.tags.map(x => typeof x === 'string' ? x.toLowerCase() : x);
                    const filteredTags =  Array.from(new Set(tags));
                    layerObj.tags = filteredTags;
                    layerObj.tagsString = response.tags.join();
                    webMapLayersAndRest.push(layerObj);
                    webMapLayersAndRest.sort(function(a, b) {
                      const titleA = a.title.toLowerCase()
                      const titleB=b.title.toLowerCase()
                      if (titleA < titleB) //sort string ascending
                      return -1
                      if (titleA > titleB)
                      return 1
                      return 0 //default return value (no sorting)
                    })
                  } // end of if/else error
                }); // end of L.esri.request

              } else {
                webMapLayersAndRest.push(layerObj);
                webMapLayersAndRest.sort(function(a, b) {
                  const titleA = a.title.toLowerCase()
                  const titleB=b.title.toLowerCase()
                  if (titleA < titleB) //sort string ascending
                  return -1
                  if (titleA > titleB)
                  return 1
                  return 0 //default return value (no sorting)
                })
              } // end of if/else curOpLayer.itemId

            } // end of for loop

            // webMapLayersAndRest.sort(function(a, b) {
            //   const titleA = a.title.toLowerCase()
            //   const titleB=b.title.toLowerCase()
            //   if (titleA < titleB) //sort string ascending
            //       return -1
            //   if (titleA > titleB)
            //       return 1
            //   return 0 //default return value (no sorting)
            // })

            const categories = ['']
            for (let layer of webMapLayersAndRest) {
              if (!categories.includes(layer.category)) {
                categories.push(layer.category);
              }
            }

            categories.sort(function(a, b) {
              const titleA = a.toLowerCase()
              const titleB=b.toLowerCase()
              if (titleA < titleB) //sort string ascending
                  return -1
              if (titleA > titleB)
                  return 1
              return 0 //default return value (no sorting)
            })

            self.$store.commit('setWebMapLayersAndRest', webMapLayersAndRest);
            self.$store.commit('setCategories', categories);
            map.createPane('highlightOverlay');
            // console.log('EsriWebMap end of onload')
            self.runAsyncLegendLoop()
          }) // end of webmap onload
        }, response => {
          console.log('AXIOS ERROR WebMap.vue');
        }) // end of axios

      }, // end of parentMounted
      async runAsyncLegendLoop() {
        let layers = this.$store.state.map.webMapLayersAndRest;
        // console.log('runAsyncLegendLoop running, this.defaultLayers:', this.defaultLayers, 'this.$store.state.map.webMapLayersAndRest:', this.$store.state.map.webMapLayersAndRest);
        for (let layer of layers.keys()) {
          // console.log('in runAsyncLegendLoop loop, layer:', layer);
          if (this.defaultLayers.includes(layers[layer].title)) {
            // console.log('in runAsyncLegendLoop on:', layers[layer].title)
            this.initializeDefaultLegends(layers[layer].layer, layers[layer].title, layers[layer].id)
            var x = await this.resolveLegendLoop('resolved', layer)
            // console.log('in runAsyncLegendLoop, x:', x)
          }
        }
      },

      resolveLegendLoop(x, layer) {
        // console.log('in resolveLegendLoop, layer:', layer);
        return new Promise(resolve => {
          let i;
          for (i=0; i<10; i++) {
            setTimeout(() => {
              if (!!this.$store.state.map.webMapLayersAndRest[layer].legend) {
                resolve(x);
              }
            }, 500);
          }
        });
      },

      initializeDefaultLegends(layer, layerName, layerId, layerDefinition) {
        // console.log('EsriWebMap.vue initializeDefaultLegends is runnning');
        let drawingInfo;
        if (layerDefinition) {
          drawingInfo = layerDefinition.drawingInfo;
        }
        const opts = {
          layerName: layerName,
          layerId: layerId,
          store: this.$store,
          drawingInfo
        }
        // console.log('METHOD initializeDefaultLegends is running, layerId:', layerId, 'opts:', opts, 'L.esri:', L.esri);

        const legend = L.esri.legendControl(layer, opts);
      },

    } // end of methods

  }; // end of export
</script>

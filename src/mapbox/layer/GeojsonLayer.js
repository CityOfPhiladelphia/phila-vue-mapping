import layerEvents from "../lib/layerEvents";
import mixin from "./layerMixin";

export default {
  name: "GeojsonLayer",
  mixins: [mixin],

  computed: {
    getSourceFeatures() {
      return filter => {
        if (this.map) {
          return this.map.querySourceFeatures(this.sourceId, { filter });
        }
        return null;
      };
    },

    getRenderedFeatures() {
      return (geometry, filter) => {
        if (this.map) {
          return this.map.queryRenderedFeatures(geometry, {
            layers: [this.layerId],
            filter
          });
        }
        return null;
      };
    },

    getClusterExpansionZoom() {
      return clusterId => {
        return new Promise((resolve, reject) => {
          if (this.mapSource) {
            this.mapSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
              if (err) {
                return reject(err);
              }
              return resolve(zoom);
            });
          } else {
            return reject(
              new Error(`Map source with id ${this.sourceId} not found.`)
            );
          }
        });
      };
    },

    getClusterChildren() {
      return clusterId => {
        return new Promise((resolve, reject) => {
          const source = this.mapSource;
          if (source) {
            source.getClusterChildren(clusterId, (err, features) => {
              if (err) {
                return reject(err);
              }
              return resolve(features);
            });
          } else {
            return reject(
              new Error(`Map source with id ${this.sourceId} not found.`)
            );
          }
        });
      };
    },

    getClusterLeaves() {
      return (...args) => {
        return new Promise((resolve, reject) => {
          if (this.mapSource) {
            this.mapSource.getClusterLeaves(...args, (err, features) => {
              if (err) {
                return reject(err);
              }
              return resolve(features);
            });
          } else {
            return reject(
              new Error(`Map source with id ${this.sourceId} not found.`)
            );
          }
        });
      };
    }
  },

  created() {
    console.log('GeojsonLayer.js created is running, this.sourceId:', this.sourceId, 'this.source:', this.source);
    if (this.source) {
      this.$watch(
        "source.data",
        function(next) {
          if (this.initial) return;
          this.mapSource.setData(next);
        },
        { deep: true }
      );
    }
    this.$_deferredMount();
  },

  methods: {
    $_deferredMount() {
      console.log('GeojsonLayer.js $_deferredMount is running, this.sourceId:', this.sourceId, 'this.source:', this.source);
      // this.map = payload.map;
      this.map.on("dataloading", this.$_watchSourceLoading);
      if (this.source) {
        const source = {
          type: "geojson",
          ...this.source
        };
        try {
          console.log('try map.addSource is starting');
          if (!Object.keys(this.map.style.imageManager.images).includes('markers')) {
            console.log('inside if, adding image');
            this.map.loadImage(
              'https://mapboard-images.s3.amazonaws.com/camera.png',
              function(error, image) {
                this.map.addImage('markers', image);
              }.bind(this)
            );
          }
          this.map.addSource(this.sourceId, source);
          console.log('try map.addSource is ending');
        } catch (err) {
          console.log('catch err is running, err:', err);
          if (this.replaceSource) {
            this.map.removeSource(this.sourceId);
            this.map.addSource(this.sourceId, source);
          }
        }
      }
      console.log('GeojsonLayer.js $_deferredMount, about to $_addLayer');
      this.$_addLayer();
      console.log('GeojsonLayer.js $_deferredMount, after $_addLayer');
      this.$_bindLayerEvents(layerEvents);
      this.map.off("dataloading", this.$_watchSourceLoading);
      this.initial = false;
    },

    $_addLayer() {
      console.log('GeojsonLayer.js $_addLayer is starting');
      let existed = this.map.getLayer(this.layerId);
      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$_emitEvent("layer-exists", { layerId: this.layerId });
          return existed;
        }
      }
      const layer = {
        id: this.layerId,
        source: this.sourceId,
        ...this.layer
      };
      console.log('$_addLayer is still running, layer:', layer);
      this.map.addLayer(layer, this.before);
      console.log('$_addLayer after map.addLayer');
      this.$_emitEvent("added", { layerId: this.layerId });
    },

    setFeatureState(featureId, state) {
      if (this.map) {
        const params = { id: featureId, source: this.source };
        return this.map.setFeatureState(params, state);
      }
    },

    getFeatureState(featureId) {
      if (this.map) {
        const params = { id: featureId, source: this.source };
        return this.map.getFeatureState(params);
      }
    },

    removeFeatureState(featureId, sourceLayer, key) {
      if (this.map) {
        const params = {
          id: featureId,
          source: this.source,
          sourceLayer
        };
        return this.map.removeFeatureState(params, key);
      }
    }
  }
};

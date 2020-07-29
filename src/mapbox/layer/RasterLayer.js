import layerEvents from "../lib/layerEvents";
import mixin from "./layerMixin";

export default {
  name: "RasterLayer",
  mixins: [ mixin ],

  created() {
    console.log('RasterLayer created is running');
    this.$_deferredMount();
  },

  methods: {
    $_deferredMount() {
      let source = {
        type: "raster",
        ...this.source,
      };

      console.log('in RasterLayer.js $_deferredMount, source:', source, 'this:', this);
      this.map.on("dataloading", this.$_watchSourceLoading);

      try {
        // console.log('in RasterLayer.js try, this.sourceId:', this.sourceId, 'source:', source);
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        }
      }

      // let before = this.before;
      // // console.log('RasterLayer.js end is running, layerId:', this.layerId, 'before:', before);
      // let beforeExists = this.map.getStyle().layers.filter(function(layer) {
      //   // console.log('RasterLayer.js, layer.id:', layer.id, 'before:', before);
      //   return layer.id === before;//[0].id;
      // });

      this.$_addLayer();
      this.$_bindLayerEvents(layerEvents);
      this.map.off("dataloading", this.$_watchSourceLoading);
      this.initial = false;
    },

    $_addLayer() {
      let existed = this.map.getLayer(this.layerId);
      console.log('RasterLayer.js $_addLayer is running, this:', this, 'this.layerId:', this.layerId, 'this.before:', this.before, 'this.map:', this.map, 'existed:', existed);
      if (existed) {
        if (this.replace) {
          // console.log('RasterLayer.js if if replace is running')
          this.map.removeLayer(this.layerId);
        } else {
          // console.log('RasterLayer.js if else is running, this.layerId:', this.layerId);
          this.$_emitEvent("layer-exists", { layerId: this.layerId });
          return existed;
        }
      }
      let layer = {
        id: this.layerId,
        type: "raster",
        source: this.sourceId,
        ...this.layer,
      };

      let before = this.before;
      console.log('RasterLayer.js end is running, layerId:', this.layerId, 'before:', before);
      let layers = this.map.getStyle().layers;
      let beforeExists = []
      for (let layer of layers) {
        console.log('in loop, layer:', layer, 'layer.id:', layer.id);
        if (before.includes(layer.id)) {
          beforeExists.push(layer.id);
          break;
        }
      }
      // let beforeExists = this.map.getStyle().layers.filter(function(layer) {
      //   // console.log('RasterLayer.js, layer.id:', layer.id, 'before:', before);
      //   return layer.id === before;//[0].id;
      // });

      // console.log('RasterLayer.js, layerId:', this.layerId, 'beforeExists:', beforeExists, 'this.$store.map.getStyle().layers:', this.$store.map.getStyle().layers);

      if (beforeExists.length) {
        this.map.addLayer(layer, beforeExists[0]);
      } else {
        this.map.addLayer(layer);
      }

      this.$_emitEvent("added", { layerId: this.layerId });
      this.map.resize();
    },
  },
};

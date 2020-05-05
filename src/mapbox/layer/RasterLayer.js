import layerEvents from "../lib/layerEvents";
import mixin from "./layerMixin";

export default {
  name: "RasterLayer",
  mixins: [mixin],

  created() {
    this.$_deferredMount();
  },

  methods: {
    $_deferredMount() {
      let source = {
        type: "raster",
        ...this.source
      };

      // console.log('in RasterLayer.js, source:', source, 'this:', this);

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
        ...this.layer
      };

      // console.log('RasterLayer.js end is running');

      this.map.addLayer(layer, this.before);
      this.$_emitEvent("added", { layerId: this.layerId });
    }
  }
};

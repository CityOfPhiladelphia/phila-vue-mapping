<template>
    <opacity-slider
      v-if="initialOpacity != null"
      :position="'topleft'"
      :initial-opacity="opacity"
      @opacityChange="handleOpacityChange"
    />
</template>

<script>

import OpacitySlider from '../OpacitySlider.vue';
import layerEvents from '../lib/layerEvents';
import mixin from './layerMixin';

export default {
  name: 'RasterLayer',
  components: {
    OpacitySlider,
  },
  mixins: [ mixin ],
  props: {
    initialOpacity: {
      default: null,
    },
  },
  data() {
    let data = {
      opacity: null,
    };
    return data;
  },

  created() {
    // console.log('RasterLayer created is running');
    this.$_deferredMount();
    if (this.$props.initialOpacity) {
      const opacity= this.$props.initialOpacity;
      // console.log('RasterLayer.vue mounted, opacityFraction:', opacity);
      this.handleOpacityChange(opacity);
    }
  },
  // mounted() {
  // },
  methods: {
    handleOpacityChange(opacity) {
      // console.log('RasterLayer.vue handleOpacityChange is running, e:', opacity);
      this.$data.opacity = opacity;

      let map = this.$store.map;
      map.setPaintProperty(
        this.$props.layer.id,
        'raster-opacity',
        parseFloat(opacity/100),
      );
    },
    $_deferredMount() {
      let source = {
        type: "raster",
        ...this.source,
      };

      // console.log('in RasterLayer.js $_deferredMount, source:', source, 'this:', this);
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

      let before = this.before;
      // console.log('RasterLayer.js end is running, layerId:', this.layerId, 'before:', before);
      let beforeExists = this.map.getStyle().layers.filter(function(layer) {
        // console.log('RasterLayer.js, layer.id:', layer.id, 'before:', before);
        return layer.id === before;//[0].id;
      });

      this.$_addLayer();
      this.$_bindLayerEvents(layerEvents);
      this.map.off("dataloading", this.$_watchSourceLoading);
      this.initial = false;
    },

    $_addLayer() {
      let existed = this.map.getLayer(this.layerId);
      // console.log('RasterLayer.js $_addLayer is running, this:', this, 'this.layerId:', this.layerId, 'this.before:', this.before, 'this.map:', this.map, 'existed:', existed);
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
      // console.log('RasterLayer.js end is running, layerId:', this.layerId, 'before:', before);
      let beforeExists = this.map.getStyle().layers.filter(function(layer) {
        // console.log('RasterLayer.js, layer.id:', layer.id, 'before:', before);
        return layer.id === before;//[0].id;
      });

      // console.log('RasterLayer.js, layerId:', this.layerId, 'beforeExists:', beforeExists, 'this.$store.map.getStyle().layers:', this.$store.map.getStyle().layers);

      if (beforeExists.length) {
        this.map.addLayer(layer, this.before);
      } else {
        this.map.addLayer(layer);
      }

      this.$_emitEvent("added", { layerId: this.layerId });
      this.map.resize();
    },
  },
};

</script>

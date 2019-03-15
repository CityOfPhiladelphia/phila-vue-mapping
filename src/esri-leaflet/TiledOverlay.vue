<!-- REVIEW should this be merged with TiledMapLayer.vue and put the opacity
slider in a slot? -->

<template>
  <opacity-slider :layer="this.$leafletElement"
                  :position="'topleft'"
                  :initialOpacity="opacity"
  />
  <!-- <div v-if="!opacitySlider"></div> -->
</template>

<script>
  // import * as L from 'leaflet';
  import { tiledMapLayer as TiledMapLayer } from 'esri-leaflet';
  import OpacitySlider from '../components/OpacitySlider.vue';

  export default {
    name: 'EsriTiledOverlay',
    components: {
      OpacitySlider
    },
    props: [
      'url',
      'minZoom',
      'maxZoom',
      'zIndex',
      'attribution',
      'opacity'
    ],
    created() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;

      // REVIEW kind of hacky/not reactive?
      if (map) {
        leafletElement.addTo(map);
        map.attributionControl.removeAttribution('overwrite');
      }
    },
    destroyed() {
      this.$leafletElement._map.removeLayer(this.$leafletElement);
    },
    // we don't actually render anything, but need to define either a template
    // or a render function
    // render(h) {
    //   return;
    // },
    methods: {
      createLeafletElement() {
        const props = Object.assign({}, this.$props);
        const mapLayer = new TiledMapLayer(props);
        return mapLayer;
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      }
    }
  };
</script>

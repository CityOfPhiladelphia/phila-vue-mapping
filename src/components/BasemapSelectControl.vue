<template>
  <div v-show="shouldShowBasemapSelectControl">
    <select
      id="year-select"
      @change="handleImageryChange"
    >
      <optgroup
        v-for="(imageryTypeDef, imageryType) in imageryTypes"
        :key="imageryType"
        :label="imageryTypeDef.label"
      >
        <option
          v-for="basemap in basemapsForImageryType(imageryType)"
          :key="basemap.key"
          :data-key="basemap.key"
        >
          {{ basemap.label }}
        </option>
      </optgroup>
    </select>
  </div>
</template>

<script>
import Control from '../leaflet/Control.vue';
const { props, methods } = Control;

export default {
  name: 'BasemapSelectControl',
  props: [
    'position',
  ],
  computed: {
    shouldShowBasemapSelectControl() {
      return this.$store.state.map.shouldShowBasemapSelectControl;
    },
    imageryTypes() {
      return this.$config.map.imageryTypes;
    },
    currentImagery() {
      return this.$store.state.map.imagery;
    },
  },
  watch: {
    currentImagery(nextCurrentImagery) {
      const nextYear = nextCurrentImagery.replace(/\D/g,'');
      const el = document.getElementById('year-select');
      el.value = nextYear;
    },
  },
  methods: Object.assign(methods, {
    handleImageryChange() {
      const el = document.getElementById('year-select');
      console.log('el:', el, 'el.options:', el.options, 'el.selectedIndex:', el.selectedIndex);
      const group = el.options[el.selectedIndex].parentElement.label;
      const year = el.options[el.selectedIndex].value;
      const nextBasemap = group.toLowerCase() + year;

      this.$store.commit('setImagery', nextBasemap);
    },
    // returns keys of basemaps of a certain type (e.g. historic, imagery)
    basemapsForImageryType(targetType) {
      const basemapConfig = this.$config.map.basemaps;
      const basemapKeys = Object.keys(basemapConfig);
      const basemaps = [];

      for (let basemapKey of basemapKeys) {
        const basemapDef = basemapConfig[basemapKey];
        const basemapType = basemapDef.type;

        if (basemapType === targetType) {
          const basemapLabel = basemapDef.label;
          basemaps.push({
            type: basemapType,
            label: basemapLabel,
          });
        }
      }
      return basemaps;
    },
  }),
};
</script>

<style scoped>

</style>

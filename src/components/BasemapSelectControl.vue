<template>
  <div v-show="shouldShowImagery">
    <select id="year-select" @change="handleImageryChange">
      <optgroup v-for="(imageryTypeDef, imageryType) in imageryTypes"
                :label="imageryTypeDef.label">
        <option v-for="basemap in basemapsForImageryType(imageryType)"
                :data-key="basemap.key"
        >
          {{ basemap.label }}
        </option>
      </optgroup>
      <!-- <optgroup label="Historic">
        <option v-for="historicYear in historicYears">
          {{historicYear}}
        </option>
      </optgroup> -->
    </select>
  </div>
</template>

<script>
  import Control from '../leaflet/Control.vue';
  const {props, methods} = Control;

  export default {
    props: [
      'position',
    ],
    computed: {
      shouldShowImagery() {
        return this.$store.state.map.shouldShowImagery;
      },
      imageryTypes() {
        return this.$config.map.imageryTypes;
      }
    },
    methods: Object.assign(methods, {
      handleImageryChange() {
        const el = document.getElementById('year-select');
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
              label: basemapLabel
            })
          }
        }

        return basemaps;
      }
    })
  };
</script>

<style scoped>

</style>

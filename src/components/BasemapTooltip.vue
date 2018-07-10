<template>
  <div>
    <div :class="this.basemap === 'none' ? 'basetooltip': 'basetooltip2'"
         v-on:mouseover="onMouseover"
         v-on:mouseout="onMouseout"
    >
      <div v-if="this.basemap === 'pwd'">
        The property boundaries displayed on the map are for reference only and may not be used in place of recorded deeds or land surveys. Boundaries are generalized for ease of visualization. Source: Philadelphia Water
      </div>
      <div v-else-if="this.basemap === 'dor'">
        The property boundaries displayed on the map are for reference only and may not be used in place of recorded deeds or land surveys. Dimension lengths are calculated using the GIS feature. Source: Department of Records.
      </div>
      <div v-else>
        i
      </div>
    </div>
  </div>
</template>

<script>
  import Control from '../leaflet/Control.vue';
  const {props, methods} = Control;

  export default {
    props: [
      'position',
    ],
    data() {
      return {
        'basemap': 'none'
      }
    },
    computed: {
      activeBasemap() {
        return this.$store.state.map.basemap;
      },
      activeTopic() {
        return this.$store.state.activeTopic;
      }
    },
    methods: Object.assign(methods, {
      onMouseover() {
        const stateBasemap = this.activeBasemap;
        let finalBasemap = stateBasemap;
        if (stateBasemap.includes('imagery') || stateBasemap.includes('historic')) {
          if (this.activeTopic === 'deeds' || this.activeTopic === 'zoning') {
            finalBasemap = 'dor'
          } else {
            finalBasemap = 'pwd'
          }
        }
        this.basemap = finalBasemap;
      },
      onMouseout() {
        this.basemap = 'none';
      }
    })
  };
</script>

<style>
.basetooltip {
  width: 32px;
  height: 32px;
  padding: 5px 13px;
  font: 20px/22px Arial, Helvetica, sans-serif;
  background: white;
  background: rgba(255,255,255,1);
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  border-radius: 5px;
}

.basetooltip2 {
  float: right;
  width: 80%;
  height: 32px;
  padding: 3px 10px;
  padding-right: 40px;
  font: 12px/14px Arial, Helvetica, sans-serif;
  background: white;
  background: rgba(255,255,255,1);
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  border-radius: 5px;
}

.basetooltip a {
  color: black
}

.basetooltip2 a {
  color: black
}

</style>

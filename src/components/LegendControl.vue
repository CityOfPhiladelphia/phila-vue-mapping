<template>
  <div v-show="this.shouldShowLegend">
    <div class="legend">
      <ul class="legend-list">
        <li 
          v-for="key in this.keys"
          :style="&quot;font-size:&quot;+items[key][&quot;font-size&quot;]+&quot;;&quot;"
          class="legend-listitem"
        >
          <div 
            :style="&quot;background-color:&quot;+items[key][&quot;background-color&quot;]+
              &quot;; border-color:&quot;+items[key][&quot;border-color&quot;]+
              &quot;; border-style:&quot;+items[key][&quot;border-style&quot;]+
              &quot;; border-width:&quot;+items[key][&quot;border-weight&quot;]+
              &quot;; width:&quot;+items[key].width+
              &quot;; height:&quot;+items[key].height+&quot;;&quot;"
            class="legend-box"
          />
          <div class="list-text">
            {{ key }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Control from '../leaflet/Control.vue';
const { props, methods } = Control;

export default {
  name: 'LegendControl',
  props: [
    'position',
    'options',
    'items',
  ],
  computed: {
    keys() {
      return Object.keys(this.$props.items);
    },
    activeTopic() {
      return this.$store.state.activeTopic;
    },
    shouldShowBasemapSelectControl() {
      return this.$store.state.map.shouldShowBasemapSelectControl;
    },
    shouldShowLegend() {
      let result = true;
      if (!this.$props.options.topics.includes(this.activeTopic)) {
        result = false;
      }
      if (this.$props.options.showWithBaseMapOnly) {
        if (this.shouldShowBasemapSelectControl) {
          result = false;
        }
      }
      return result;
    },
    // style() {
    //   // const string = "background: " + this.$props.items[key].background + " color: " + this.$props.items[key].color
    //   const string = this.$props.items[]
    //   console.log('style string', string);
    //   return string
    // }
  },
  methods: Object.assign(methods),
};
</script>

<style>
.legend {
  display: inline-block;
  padding: 6px 8px;
  font: 14px/16px Arial, Helvetica, sans-serif;
  background: white;
  background: rgba(255,255,255,1);
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  border-radius: 5px;
  line-height: 18px;
  color: #555;
}

.legend-box {
  display: inline-block;
  width: 18px;
  height: 18px;
  opacity: 1;
  vertical-align: middle;
  margin-right: 4px;
}

.list-text {
  display: inline-block;
  vertical-align: middle;
}

.legend-list {
  list-style: none;
  padding-top: 2px;
  padding-left: 2px;
  margin-left: 0px;
  /*override standards*/
  margin-bottom: 0;
}
</style>

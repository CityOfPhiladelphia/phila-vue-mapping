<template>
  <div
    v-show="shouldShowLegend"
    class="legend-overlay"
  >
    <div class="legend">
      <ul class="legend-list">
        <li
          v-for="key in keys"
          :key="key"
          :style="&quot;font-size:&quot;+items[key][&quot;font-size&quot;]+&quot;;&quot;"
          class="legend-listitem"
        >
          <div
            v-if="!$props.options.shape || ($props.options.shape && $props.options.shape === 'square')"
            :style="&quot;background-color:&quot;+items[key][&quot;background-color&quot;]+
              &quot;; border-color:&quot;+items[key][&quot;border-color&quot;]+
              &quot;; border-style:&quot;+items[key][&quot;border-style&quot;]+
              &quot;; border-width:&quot;+items[key][&quot;border-weight&quot;]+
              &quot;; width:&quot;+items[key].width+
              &quot;; height:&quot;+items[key].height+&quot;;&quot;"
            class="legend-box"
          />
          <div
            v-if="$props.options.shape === 'circle'"
            :style="&quot;background-color:&quot;+items[key][&quot;background-color&quot;]+
              &quot;; border-color:&quot;+items[key][&quot;border-color&quot;]+
              &quot;; border-style:&quot;+items[key][&quot;border-style&quot;]+
              &quot;; border-width:&quot;+items[key][&quot;border-weight&quot;]+
              &quot;; width:&quot;+items[key].width+
              &quot;; height:&quot;+items[key].height+&quot;;&quot;"
            class="legend-circle"
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

export default {
  name: 'OverlayLegend',
  props: [
    'position',
    'options',
    'items',
  ],
  computed: {
    keys() {
      return Object.keys(this.$props.items);
    },
    shape() {
      return this.$props.options.shape;
    },
    // activeTopic() {
    //   return this.$store.state.activeTopic;
    // },
    shouldShowBasemapSelectControl() {
      return this.$store.state.map.shouldShowBasemapSelectControl;
    },
    shouldShowLegend() {
      let result = true;
      // if (!this.$props.options.topics.includes(this.activeTopic)) {
      //   result = false;
      // }
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
  mounted() {
    // console.log('LegendControlNoTopic, this.$props.options:', this.$props.options);
  },
  // methods: Object.assign(methods),
};
</script>

<style>

.legend-overlay {
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  position: absolute;
  width: 25%;
  min-width: 200px;
  bottom: 0;
  left: 0;
  padding: 10px;
  /* margin-bottom: 24px; */
}

.legend-overlay .legend-overlay-inner {
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
}

.legend-overlay h2 {
  line-height: 24px;
  display: block;
  margin: 0 0 10px;
}

.legend-overlay .legend .bar {
  height: 10px;
  width: 100%;
  background: linear-gradient(to right, #fca107, #7f3121);
}

.legend-overlay input {
  background-color: transparent;
  display: inline-block;
  width: 100%;
  position: relative;
  margin: 0;
  cursor: ew-resize;
}

</style>

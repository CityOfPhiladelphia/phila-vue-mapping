<template>
  <!-- v-show="shouldShowDrawControlBox" -->
  <div
    id="calculated-area"
    class="calculated-area"
  >
  </div>

</template>

<script>

export default {
  name: 'DrawControlBox',
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

.calculated-area {
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  position: absolute;
  height: 100px;
  width: 300px;
  min-width: 200px;
  bottom: 0;
  left: 0;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 24px;
  margin-left: 50px;
}

/* .legend-overlay .legend-overlay-inner {
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
} */

</style>

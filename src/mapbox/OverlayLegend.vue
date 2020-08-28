<template>
  <div
    v-show="shouldShowLegend"
    :class="'legend-overlay ' + position"
    :style="'margin-bottom:' + options.marginBottom + '; margin-right:' + options.marginRight"
  >
    <div class="legend legend-overlay-inner">
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
    shouldShowBasemapSelectControl() {
      return this.$store.state.map.shouldShowBasemapSelectControl;
    },
    shouldShowLegend() {
      let result = true;
      if (this.$props.options.showWithBaseMapOnly) {
        if (this.shouldShowBasemapSelectControl) {
          result = false;
        }
      }
      return result;
    },
  },
};
</script>

<style>

.legend-overlay {
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  position: absolute;
  bottom: 0;
  padding: 10px;
  z-index: 12;
}

.legend-overlay .legend-overlay-inner {
  display: inline-block;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 6px 8px;
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

.legend-box {
  display: inline-block;
  width: 18px;
  height: 18px;
  opacity: 1;
  vertical-align: middle;
  margin-right: 4px;
}

.legend-circle {
  border-radius: 50%;
  display: inline-block;
  width: 18px;
  height: 18px;
  opacity: 1;
  vertical-align: middle;
  margin-right: 4px;
}

.bottom-right {
  right: 0;
}

.bottom-left {
  left: 0;
}

.legend-list {
  list-style: none;
  padding-top: 2px;
  padding-left: 2px;
  margin-left: 0;
  margin-bottom: 0;
}

.list-text {
  display: inline-block;
  vertical-align: middle;
}

</style>

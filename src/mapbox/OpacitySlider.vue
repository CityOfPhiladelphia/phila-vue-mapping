<template>
  <div class="map-overlay top">
    <div class="map-overlay-inner">
      <!-- <label>{{ value }}</label> -->
      <input
        id="slider"
        class="opacity-slider"
        type="range"
        min="0"
        max="100"
        step="0"
        :value="value"
        @input="handleSliderValueChange"
        @change="handleSliderValueChange"
      >
    </div>
  </div>
</template>

<script>

export default {
  name: 'OpacitySlider',
  props: [
    'position',
    'initialOpacity',
  ],
  data() {
    let data = {
      value: 100,
    };
    return data;
  },
  mounted() {
    // console.log('OpacitySlider mounted is running, this.$props.initialOpacity:', this.$props.initialOpacity);
    this.$data.value = this.$props.initialOpacity;
  },
  methods: {
    handleSliderValueChange(e) {
      // console.log('handleSliderValueChange is running, e:', e, 'e.target.value:', e.target.value);
      this.$data.value = e.target.value;
      this.$emit('opacityChange', e.target.value);
    },
  },
};
</script>

<style>

.opacity-slider {
  width: 100px;
}

.map-overlay {
  font: bold 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  position: absolute;
  width: 140px;
  top: 0;
  left: 0;
  padding: 10px;
  margin-top: 74px;
  margin-left: 20px;
  z-index: 12;
}

.map-overlay .map-overlay-inner {
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 10px;
  padding-top: 12px;
  padding-bottom:6px;
  margin-bottom: 10px;
}

</style>

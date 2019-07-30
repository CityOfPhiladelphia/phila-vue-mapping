<template>
  <div class="leaflet-bar easy-button-container leaflet-control"
       :style="{ 'color': 'red', 'height': barHeight, 'width': barWidth, 'line-height': barLineHeight }"
  >
    <button @click="handleBufferButtonClick"
            :class="this.bufferToolActive"
            :style="{ 'color': 'red', 'height': buttonHeight, 'width': buttonWidth, 'line-height': buttonLineHeight }"
    >
      <span class="button-state state-unnamed-state unnamed-state-active">
        <font-awesome-icon :icon="'circle'" class="fa-3x icon-padding" />
      </span>
    </button>
  </div>
</template>

<script>
  import Control from '../leaflet/Control.vue';

  const {props, methods} = Control;

  export default {
    props: [
      'position',
      'barHeight',
      'barWidth',
      'barLineHeight',
      'buttonHeight',
      'buttonWidth',
      'buttonLineHeight'
    ],
    computed: {
      bufferToolActive() {
        return this.$store.state.bufferMode ? 'active' : 'inactive'
      }
    },
    methods: Object.assign(methods, {
      handleBufferButtonClick(e) {
        // console.log('handleBufferButtonClick is running, Object.keys(this.$store.state):', Object.keys(this.$store.state));
        const bufferMode = this.$store.state.bufferMode;
        this.$store.commit('setBufferMode', !bufferMode);
        if (Object.keys(this.$store.state).includes('drawStart')) {
          this.$store.commit('setDrawStart', null);
          const cancelButton = document.querySelector('[title="Cancel drawing"]');
          if (cancelButton) {
            cancelButton.click();
          }
        }
      },
    })
  };
</script>

<style scoped>

  .button-image {
    vertical-align: top;
  }

  .icon-padding {
    padding-top: 8px;
    color: #4f4f4f;
  }

  .inactive {
    background-color: #ffffff;
  }
  .inactive:hover {
    background-color: #ffffff;
  }
  .active {
    background-color: rgb(243, 198, 19);
  }
  .active:hover {
    background-color: rgb(243, 198, 19);
  }

</style>

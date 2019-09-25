<template>
  <div class="leaflet-bar easy-button-container leaflet-control" title="Search by Radius"
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
    <div :class="this.bufferClassActive">
      <ul>
        <li>Click to search by buffer.</li>
        <li class="cancel"><a @click="handleBufferButtonClick" >Cancel</a></li>
      </ul>

    </div>
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
        return this.$store.state.bufferMode ? 'active pointer' : 'inactive pointer'
      },
      bufferClassActive() {
        return this.$store.state.bufferMode ? 'leaflet-buffer-actions' : 'leaflet-buffer-actions tool-inactive'
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

  .icon-padding {
    padding-top: 8px;
    color: #4f4f4f;
  }

  @media screen and (max-width: 750px) {

    .fa-3x {
      font-size: 1.5em;
    }

    .icon-padding {
      padding-top: 0px;
      color: #4f4f4f;
      left: 4px;
      top: 4px;
      position: absolute;
    }


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

  .leaflet-buffer-actions {
    height: 30px;
    width: 217px;
    background-color: #919187;
    color: #FFF;
    display: block;
    top: -1px;
    left: 113px;
    position: absolute;
    /* padding-left: 10px; */
    font: 11px/19px "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-size: 12px;
    /* line-height: 2.5; */
    border-radius: 0 4px 4px 0;
  }

  .leaflet-buffer-actions li {
    display: inline-block;
    border-left: 1px solid #AAA;
    padding: 0 5px 0 5px;
    height: 30px;
  }

  .leaflet-buffer-actions ul {
    line-height: 2.5;
    margin-left: 5px;
  }

  .leaflet-buffer-actions li:first-child {
    /* margin-left: 9px; */
    border-left: none;
}

.cancel {
  margin-left: 13px;
}

.tool-inactive {
  display: none;
}

.leaflet-buffer-actions a {
  padding-left: 5px;
    width: 100%;
    color: #FFF;
    font: "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-size: 12px;
    background-color: #919187;
}

.pointer {
  cursor: pointer;
}

</style>

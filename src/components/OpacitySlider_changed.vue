<template>
  <div class="slider-wrapper">
    test
    <!-- <input class="slider"
           type="range"
           min="1"
           max="100"
           step="1"
    > -->
    <!-- v-model="opa" -->
  </div>
</template>

<script>
  // import Control from '../leaflet/Control.vue';
  // const {props, methods} = Control;

  let opacity_layer;

  export default {
    props: [
      // 'position',
      'options',
      'items',
      'layer',
      'position',
      'initialOpacity'
    ],
    created() {
      console.log('opacitySlider.vue created is running');
      let opacityValue = this.$props.initialOpacity * 100
      // console.log("opacityValue", opacityValue);

      L.Control.opacitySlider = L.Control.extend({
        options: {
          position: 'topright'
        },
        setOpacityLayer: function (layer) {
          opacity_layer = layer;
        },
        onAdd: function (map) {
          console.log('opacitySlider.vue onAdd is running');
          // console.log('on add', this, this.$props);
          var opacity_slider_div = L.DomUtil.create('div', 'opacity_slider_control');
          opacity_slider_div.innerHTML=`<input class="slider"\
                 type="range"\
                 min="1"\
                 max="100"\
                 step="1"\
                 style="transform-origin: 65px 65px;\
                 transform: rotate(-90deg);"\
          >`;
          // opacity_slider_div.innerHTML=`<div class="slider" data-slider data-initial-start="50" data-end="200">\
          //   <span class="slider-handle"  data-slider-handle role="slider" tabindex="1"></span>\
          //   <span class="slider-fill" data-slider-fill></span>\
          //   <input type="hidden">\
          // </div>`;

          // $(opacity_slider_div).slider({
          //   orientation: "vertical",
          //   range: "min",
          //   min: 0,
          //   max: 100,
          //   value: opacityValue,
          //   step: 10,
          //   start: function ( event, ui) {
          //     //When moving the slider, disable panning.
          //     map.dragging.disable();
          //     map.once('mousedown', function (e) {
          //       map.dragging.enable();
          //     });
          //   },
          //   slide: function ( event, ui ) {
          //     var slider_value = ui.value / 100;
          //     opacity_layer.setOpacity(slider_value);
          //   }
          // });
          //
          // $(opacity_slider_div).click(function(e) {
          //   e.stopPropagation();
          // })
          opacity_slider_div.addEventListener('click', function(e) {
            e.stopPropagation();
          })

          return opacity_slider_div;
        }
      });
    },
    mounted() {
      console.log('opacitySlider.vue mounted is running');
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map;
      // REVIEW kind of hacky/not reactive?
      if (map) {
        this.$nextTick(() => {
          leafletElement.addTo(map.map);
        });
      }
    },
    destroyed() {
      console.log('opacitySlider.vue destroyed is running');
      this.$leafletElement._map.removeControl(this.$leafletElement);
    },
    // we don't actually render anything, but need to define either a template
    // or a render function
    // render(h) {
    //   return;
    // },
    // methods: Object.assign(methods)
    methods: {
      createLeafletElement() {
        console.log('opacitySlider.vue createLeafletElement is running');
        const OpacitySlider = new L.Control.opacitySlider;
        OpacitySlider.setPosition(this.$props.position);
        OpacitySlider.setOpacityLayer(this.$props.layer);
        return OpacitySlider;
      },
      parentMounted(parent) {
        console.log('opacitySlider.vue parentMounted is running');
        const map = parent.$leafletElement;
        map.addControl(this.$leafletElement);
      }
    }
  };

</script>

<style scoped>

.opacity_slider_control {
  /* background-image: none;
  background-color: #646464;
  height: 200px; */
  /* transform-origin: 65px 65px;
  transform: rotate(-90deg); */
}

input[type=range] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type=range]::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color: transparent;
}

/* Special styling for WebKit/Blink */
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
}

/* All the same stuff for Firefox */
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

/* All the same stuff for IE */
input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #367ebd;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type=range]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]:focus::-ms-fill-upper {
  background: #367ebd;
}

</style>

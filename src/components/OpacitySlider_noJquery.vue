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
import * as L from 'leaflet';
// import Control from '../leaflet/Control.vue';
// const {props, methods} = Control;

let opacity_layer;

function test(e) {
  console.log('test is running, e:', e);
}

export default {
  props: [
    // 'position',
    'options',
    'items',
    'layer',
    'position',
    'initialOpacity',
  ],
  created() {
    console.log('opacitySlider.vue created is running');
    let opacityValue = this.$props.initialOpacity * 100;
    // console.log("opacityValue", opacityValue);

    L.Control.opacitySlider = L.Control.extend({
      options: {
        position: 'topright',
      },
      setOpacityLayer: function (layer) {
        opacity_layer = layer;
      },
      onAdd: function (map) {
        console.log('opacitySlider.vue onAdd is running, test:', test);
        // console.log('on add', this, this.$props);

        function test2(e) {
          console.log('test2 is running, e:', e);
        }

        var opacity_slider_div = L.DomUtil.create('div', 'opacity_slider_control');
        opacity_slider_div.innerHTML=`\
            <div id="test_slider_div"\
                 style="transform-origin: 65px 65px;\
                 transform: rotate(-90deg);"\
            >\
              <input class="slider"\
                     type="range"\
                     min="1"\
                     max="100"\
                     step="1"\
              >\
            </div>`;

        // onclick="console.log('click test'); event.stopPropagation();"
        // ondrag="console.log('drag test'); event.stopPropagation();"
        // onmousedown="console.log('mousedown test'); event.stopPropagation();"
        // onmousemove="console.log('mousemove test'); event.stopPropagation();"

        // onclick="console.log('input click test'); event.stopPropagation();"
        // onmousedown="console.log('input mousedown test'); event.stopPropagation();"
        // onchange="console.log('input change test'); event.stopPropagation();"





        // style="transform-origin: 65px 65px;\
        // transform: rotate(-90deg);"\
        // onclick="console.log('test')"
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

        console.log('opacity_slider_div:', opacity_slider_div);
        // opacity_slider_div.onclick(function(e) {
        //   e.stopPropagation();
        // })

        // const opacity_slider_control = document.getElementById('opacity_slider_control');
        // console.log('opacity_slider_control:', opacity_slider_control);
        opacity_slider_div.addEventListener('click', function(e) {
          console.log('test click, e:', e);
          // e.preventDefault();
          e.stopPropagation();
        });
        // opacity_slider_div.addEventListener('change', function(e) {
        //   console.log('test change, e:', e);
        //   // e.preventDefault();
        //   e.stopPropagation();
        // })
        opacity_slider_div.addEventListener('mousedown', function(e) {
          console.log('test mousedown, e:', e);
          map.dragging.disable();
          map.once('mousedown', function (e) {
            map.dragging.enable();
          });
          // e.preventDefault();
          // e.stopPropagation();
        });
        // opacity_slider_div.addEventListener('input', function(e) {
        //   console.log('test input, e:', e);
        //   // e.preventDefault();
        //   e.stopPropagation();
        //   // return false;
        // })


        return opacity_slider_div;
      },
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
    },
  },
};

</script>

<style>

.opacity_slider_control {
  /* background-image: none;
  background-color: #646464;
  height: 200px; */
  /* transform-origin: 65px 65px;
  transform: rotate(-90deg); */
}

/* input[type=range] {
    margin: auto;
    outline: none;
    padding: 0;
    width: 640px;
    height: 2px;
    background-color: #dedede;
    background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ff1100), color-stop(100%, #ff1100));
    background-size: 50% 100%;
    background-repeat: no-repeat;
    border-radius: 10px;
    cursor: pointer;
    -webkit-appearance: none;
}

input[type=range]::-webkit-slider-runnable-track {
    box-shadow: none;
    border: none;
    background: transparent;
    -webkit-appearance: none;
}


input[type=range]::-webkit-slider-thumb {
  height: 18px;
  width: 28px;
    border: 0;
    background: #fff;
    border: 1px solid #777;
    border-radius: 8px;
    box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
    -webkit-appearance: none;
} */



/* input[type=range]{
    -webkit-appearance: none;
}

input[type=range]::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: goldenrod;
    margin-top: -4px;
}

input[type=range]:focus {
    outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: #ccc;
}




input[type=range]::-ms-track {
    width: 300px;
    height: 5px;

    background: transparent;

    border-color: transparent;
    border-width: 6px 0;

    color: transparent;
}
input[type=range]::-ms-fill-lower {
    background: #777;
    border-radius: 10px;
}
input[type=range]::-ms-fill-upper {
    background: #ddd;
    border-radius: 10px;
}
input[type=range]::-ms-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: goldenrod;
}
input[type=range]:focus::-ms-fill-lower {
    background: #888;
}
input[type=range]:focus::-ms-fill-upper {
    background: #ccc;
} */



</style>

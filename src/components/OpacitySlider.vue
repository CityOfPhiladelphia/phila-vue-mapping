<script>
  import * as L from 'leaflet';

  // TODO look into a cleaner way of importing from esri-leaflet
  // import Control from '../leaflet/Control';
  //
  // // REVIEW is there a better way to extend a vue component?
  // const {props, methods} = Control;

  let opacity_layer;

  export default {
    props: [
      'layer',
      'position',
      'initialOpacity'
    ],
    created() {
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
          // console.log('on add', this, this.$props);
          var opacity_slider_div = L.DomUtil.create('div', 'opacity_slider_control');

          $(opacity_slider_div).slider({
            orientation: "vertical",
            range: "min",
            min: 0,
            max: 100,
            value: opacityValue,
            step: 10,
            start: function ( event, ui) {
              //When moving the slider, disable panning.
              map.dragging.disable();
              map.once('mousedown', function (e) {
                map.dragging.enable();
              });
            },
            slide: function ( event, ui ) {
              var slider_value = ui.value / 100;
              opacity_layer.setOpacity(slider_value);
            }
          });

          $(opacity_slider_div).click(function(e) {
            e.stopPropagation();
          })

          return opacity_slider_div;
        }
      });
    },
    mounted() {

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
      this.$leafletElement._map.removeControl(this.$leafletElement);
    },
    // we don't actually render anything, but need to define either a template
    // or a render function
    render(h) {
      return;
    },
    methods: {
      createLeafletElement() {
        const OpacitySlider = new L.Control.opacitySlider;
        OpacitySlider.setPosition(this.$props.position);
        OpacitySlider.setOpacityLayer(this.$props.layer);
        return OpacitySlider;
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        map.addControl(this.$leafletElement);
      }
    }
  };

</script>

<style>

.opacity_slider_control .ui-slider-range {
    background-image: none;
    background-color: #646464;
    height: 200px;
}

</style>

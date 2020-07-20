<script>
import controlMixin from "./controlMixin";

export default {
  name: 'OpacitySliderControl',
  mixins: [ controlMixin ],

  props: {
    buttonText: {
      type: String,
      default: '',
    },
    buttonId: {
      type: String,
      default: 'button-id',
    },
    buttonClass: {
      type: String,
      default: '',
    },
    imageLink: {
      type: String,
      default: '',
    },
  },
  // computed: {
  //   classTest() {
  //     return 'button-control active';
  //   },
  // },
  watch: {
    buttonClass(nextButtonClass) {
      let buttonItem = document.getElementById(this.$props.buttonId);
      // console.log('watch OpacitySliderControl, buttonItem:', buttonItem, 'nextButtonClass:', nextButtonClass);
      buttonItem.className = 'button-control ' + nextButtonClass;
    },
    imageLink(nextImageLink) {
      let imageItem = document.getElementById(this.$props.buttonId + '-img');
      console.log('watch imageLink, imageItem:', imageItem, 'nextImageLink:', nextImageLink);
      imageItem.src = nextImageLink;
    },
  },
  mounted() {
    class OpacitySliderControl {

      onAdd(map){
        // console.log('OpacitySliderControl.vue OnAdd is running, props:', props);
        this.container = document.createElement('div');
        // this.container.className = 'button-control ' + props.buttonClass;
        // this.container.id = props.buttonId;
        // if (props.buttonText) {
        //   this.container.textContent = props.buttonText;
        // }
        // if (props.imageLink) {
        //   // console.log('there is a props.imageLink');
        //   let img = document.createElement('img');
        //   img.id = props.buttonId + '-img';
        //   img.className = 'button-image';
        //   img.src = props.imageLink;
        //   this.container.appendChild(img);
        //   // down.innerHTML = "Image Element Added.";
        // }

        this.container.className = 'map-overlay top';
        // if (props.buttonText) {
        //   this.container.textContent = props.buttonText;
        // }

        // let innerDiv = document.createElement('div');
        // innerDiv.className = 'map-overlay-inner'

        let theInput = document.createElement('input');
        theInput.id = 'slider';
        theInput.type = 'range';
        theInput.min = '0';
        theInput.max = '100';
        theIput.step = '0';
        theInput.value = '100';

        this.container.appendChild(theInput);
        return this.container;
      }

      onRemove(map){
        this.container.parentNode.removeChild(this.container);
      }

    }

    const props = Object.assign({}, this.$props);
    this.control = new OpacitySliderControl(props);
    this.$_addControl();

    // let buttonItem = document.getElementById(props.buttonId);
    // buttonItem.onclick = (function(event) {
    //   this.buttonClicked();
    // }).bind(this);

  },
  methods: {
    // buttonClicked() {
    //   // console.log('OpacitySliderControl buttonClicked is running');
    //   this.$emit('click');
    // },
  },
};

</script>

<style>

.map-overlay {
  font: bold 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  /* position: absolute; */
  width: 25%;
  top: 0;
  left: 0;
  padding: 10px;
}

.map-overlay .map-overlay-inner {
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
}

/* .button-control {
  padding: 0px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 0px;
  border: solid;
  border-width: 2px;
  border-color: #a1a1a1;
  border-radius: 4px;
  background-color: white;
  font-family: arial;
  font-weight: bold;
  font-size: 11px;
  color: black;
  width: 36px;
  height: 36px;
  line-height: 30px;
  text-align: center;
  pointer-events: auto;
  z-index: 12;
  cursor: pointer;
} */

/* .button-image {
  vertical-align: top !important;
} */

/* .twin-button {
  display: inline-block;
} */

/* .inactive {
  background-color: #ffffff;
} */

/* .inactive:hover {
  background-color: #ffffff;
} */

/* .active {
  background-color: rgb(243, 198, 19);
} */

/* .active:hover {
  background-color: rgb(243, 198, 19);
} */

/* .right {
  position: absolute;
  right: 0;
} */

</style>

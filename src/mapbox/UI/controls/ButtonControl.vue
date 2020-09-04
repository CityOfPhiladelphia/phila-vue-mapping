<script>
import controlMixin from "./controlMixin";

export default {
  name: 'ButtonControl',
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
    imageAlign: {
      type: String,
      default: 'middle',
    },
  },
  computed: {
    classTest() {
      return 'button-control active';
    },
  },
  watch: {
    buttonClass(nextButtonClass) {
      let buttonItem = document.getElementById(this.$props.buttonId);
      // console.log('watch ButtonControl, buttonItem:', buttonItem, 'nextButtonClass:', nextButtonClass);
      buttonItem.className = 'button-control ' + nextButtonClass;
    },
    imageLink(nextImageLink) {
      let imageItem = document.getElementById(this.$props.buttonId + '-img');
      console.log('watch imageLink, imageItem:', imageItem, 'nextImageLink:', nextImageLink);
      imageItem.src = nextImageLink;
    },
  },
  mounted() {
    class ButtonControl {

      onAdd(map){
        // console.log('ButtonControl.vue OnAdd is running, props:', props);
        this.container = document.createElement('div');
        this.container.className = 'button-control ' + props.buttonClass;
        this.container.id = props.buttonId;

        if (props.buttonText) {
          this.container.textContent = props.buttonText;
        }
        if (props.imageLink) {
          // console.log('there is a props.imageLink');
          let img = document.createElement('img');
          img.id = props.buttonId + '-img';
          if (props.imageAlign === 'top') {
            img.className = 'button-image-top';
          } else {
            img.className = 'button-image-middle';
          }
          img.src = props.imageLink;
          
          img.setAttribute('alt', props.buttonId);

          this.container.appendChild(img);
          // down.innerHTML = "Image Element Added.";
        }
        return this.container;
      }

      onRemove(map){
        this.container.parentNode.removeChild(this.container);
      }

    }

    const props = Object.assign({}, this.$props);
    this.control = new ButtonControl(props);
    this.$_addControl();

    let buttonItem = document.getElementById(props.buttonId);
    buttonItem.onclick = (function(event) {
      this.buttonClicked();
    }).bind(this);

  },
  methods: {
    buttonClicked() {
      // console.log('ButtonControl buttonClicked is running');
      this.$emit('click');
    },
  },
};

</script>

<style>

.button-control {
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
}

.button-image-top {
  vertical-align: top !important;
}

.twin-button {
  display: inline-block;
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

.right {
  position: absolute;
  right: 0;
}

</style>

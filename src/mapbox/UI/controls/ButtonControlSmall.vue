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
    tooltipText: {
      type: String,
      default: '',
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
      buttonItem.className = 'button-control ' + nextButtonClass + ' has-tooltip-hidden-mobile has-tooltip-arrow has-tooltip-left';
    },
    imageLink(nextImageLink) {
      let imageItem = document.getElementById(this.$props.buttonId + '-img');
      console.log('watch imageLink, imageItem:', imageItem, 'nextImageLink:', nextImageLink);
      imageItem.src = nextImageLink;
    },
    tooltipText(nextTooltipText) {
      let buttonItem = document.getElementById(this.$props.buttonId);
      // console.log('watch tooltipText, buttonItem:', buttonItem, 'nextTooltipText:', nextTooltipText);
      // buttonItem.setAttribute('data-tooltip', nextTooltipText);
      buttonItem.setAttribute('title', nextTooltipText);
    },
  },
  mounted() {
    console.log('ButtonControl.vue mounted');
    class ButtonControl {

      onAdd(map){
        // console.log('ButtonControl.vue OnAdd is running, props:', props);
        this.container = document.createElement('div');
        this.container.className = 'button-control ' + props.buttonClass + ' has-tooltip-hidden-mobile has-tooltip-arrow has-tooltip-left';
        this.container.id = props.buttonId;
        // this.container.setAttribute('data-tooltip', props.tooltipText);
        this.container.setAttribute('title', props.tooltipText);

        if (props.buttonText) {
          this.container.textContent = props.buttonText;
        }
        if (props.imageLink && props.imageLink !== '') {
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

.padding-5 {
  padding: 5.7px !important;
}

.button-control {
  padding: 0px;
  margin-top: -40px;
  /* margin-bottom: 6px; */
  margin-right: 8px;
  margin-left: 0px;
  border: solid;
  border-width: 2.2px;
  filter: drop-shadow(0px 0px 2px #D2D2D2);
  border-color: #D2D2D2;
  border-radius: 5px;
  background-color: white;
  font-family: arial;
  font-size: 11px;
  color: black;
  width: 33.5px;
  height: 33.5px;
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
  background-color: #EBEBEB;
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

[data-tooltip]:not(.is-disabled).has-tooltip-active:after, [data-tooltip]:not(.is-disabled).has-tooltip-active:before, [data-tooltip]:not(.is-disabled):hover:after, [data-tooltip]:not(.is-disabled):hover:before, [data-tooltip]:not(.is-loading).has-tooltip-active:after, [data-tooltip]:not(.is-loading).has-tooltip-active:before, [data-tooltip]:not(.is-loading):hover:after, [data-tooltip]:not(.is-loading):hover:before, [data-tooltip]:not([disabled]).has-tooltip-active:after, [data-tooltip]:not([disabled]).has-tooltip-active:before, [data-tooltip]:not([disabled]):hover:after, [data-tooltip]:not([disabled]):hover:before {
  padding-top: 0px;
  padding-bottom: 0px;
}

</style>

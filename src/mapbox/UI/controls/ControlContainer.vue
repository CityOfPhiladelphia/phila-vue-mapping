<template>
  <div>
    <slot />
  </div>
</template>

<script>
import controlMixin from "./controlMixin";

export default {
  name: 'containerControl',
  mixins: [controlMixin],

  props: {
    buttonText: {
      type: String,
      default: 'true',
    },
    buttonId: {
      type: String,
      default: 'button-id',
    }
  },
  mounted() {
    class ControlContainer {

      onAdd(map){
        console.log('ControlContainer.vue OnAdd is running, props:', props);
      }

      onRemove(map){
        this.container.parentNode.removeChild(this.container);
      }
    }

    const props = Object.assign({}, this.$props);
    this.control = new ControlContainer(props);
    this.$_addControl();

  },
};

</script>

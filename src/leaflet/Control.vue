<!--
The way this works is: Vue renders the control in a slot below the map, and
when the map is ready we wrap the control in a Leaflet class and add it to the
map, which also removes it from the Vue slot.

REVIEW does this break anything with Vue? Because it's expecting a node that
isn't there?
-->

<template>
  <div>
    <slot />
  </div>
</template>

<script>
  import * as L from 'leaflet';

  export default {
    props: ['position'],
    methods: {
      createLeafletElement(L) {
        // console.log('Control.vue createLeafletElement is running')
        // subclass Control to accept an el which gets mounted to the map
        class ControlParent extends L.Control {
          constructor(el, options) {
            super(options);
            this.el = el;
          }
          onAdd() {
            const el = this.el;

            // keep clicks from hitting the map
            L.DomEvent.disableClickPropagation(el);
            L.DomEvent.disableScrollPropagation(el);

            return el;
          }
        }

        const el = this.$el;
        // console.log('Control.vue el:', el);
        return new ControlParent(el, {
          position: this.position
        });
      },
      parentMounted(parent, props) {
        // console.log('Control.vue parentMounted is running, parent:', parent, 'props:', props);
        const leafletElement = this.createLeafletElement(L);
        this.$leafletElement = leafletElement;
        const map = parent.$leafletElement;
        // console.log('Control.vue parentMounted is calling addTo(map)');
        leafletElement.addTo(map);
      }
    }
  };
</script>

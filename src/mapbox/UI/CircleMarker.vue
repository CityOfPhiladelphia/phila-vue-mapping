<template>
  <div style="display: none">
    <!-- slot for custom marker -->
    <!-- <div class="test-div" /> -->
    <slot name="icon" />
    <!-- slot for popup -->
    <slot v-if="marker" />
  </div>
</template>

<script>
import withEvents from "../lib/withEvents";
import withSelfEvents from "./withSelfEvents";

const markerEvents = {
  drag: "drag",
  dragstart: "dragstart",
  dragend: "dragend",
};

const markerDOMEvents = {
  click: "click",
  mouseenter: "mouseenter",
  mouseleave: "mouseleave",
};

export default {
  name: "MapCircleMarker",
  mixins: [ withEvents, withSelfEvents ],

  inject: [ "mapbox", "map" ],

  provide() {
    const self = this;
    return {
      get marker() {
        return self.marker;
      },
    };
  },

  props: {
    // mapbox marker options
    offset: {
      type: [ Object, Array ],
      default: () => [ 0, 0 ],
    },
    coordinates: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
    },
    fillColor: {
      type: String,
    },
    opacity: {
      type: Number,
    },
    fillOpacity: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    size: {
      type: Number,
    },
    anchor: {
      type: String,
      default: 'center',
    },
    draggable: {
      type: Boolean,
      default: false,
    },
    markerId: {
      type: String,
      default: null,
    },
    data: {
      type: Object,
      default: function() {
        return {
          featureId: null,
          tableId: null,
        };
        // featureId: {
        //   type: String,
        // },
        // tableId: {
        //   String,
        // },
      },
    },
    // selected: {
    //   type: Boolean,
    //   default: false,
    // },
  },

  data() {
    return {
      initial: true,
      marker: undefined,
    };
  },
  computed: {
    featureId() {
      return this.$props.data.featureId;
    },
  },
  watch: {
    featureId() {
      // console.log('CircleMarker.vue watch featureId is firing');
      if (this.initial) {
        return;
      }
      if (this.map !== undefined && this.marker !== undefined) {
        this.marker.remove();
      }
      this.createCircleMarker();
    },
    size() {
      if (this.initial) {
        return;
      }
      if (this.map !== undefined && this.marker !== undefined) {
        this.marker.remove();
      }
      this.createCircleMarker();
    },
    fillColor() {
      // console.log('CircleMarker.vue watch markerId is firing');
      if (this.initial) {
        return;
      }
      if (this.map !== undefined && this.marker !== undefined) {
        this.marker.remove();
      }
      this.createCircleMarker();
    },
    draggable(next) {
      if (this.initial) {
        return;
      }
      this.marker.setDraggable(next);
    },
  },
  mounted() {
    this.createCircleMarker();
  },
  beforeDestroy() {
    // console.log('CircleMarker.vue beforeDestroy() is running');
    if (this.map !== undefined && this.marker !== undefined) {
      this.marker.remove();
    }
  },
  methods: {
    createCircleMarker() {
      const markerOptions = {
        ...this.$props,
      };
      // console.log('CircleMarker.vue createCircleMaker is running'); //, markerOptions:', markerOptions);

      var el = document.createElement('div');

      el.addEventListener('click', function(e) {
        e.stopPropagation();
      });

      el.className = 'circle-div';
      el.style.color = markerOptions.color;
      el.style['background-color'] = markerOptions.fillColor;
      el.style['border-width'] = markerOptions.weight;
      el.style['opacity'] = markerOptions.opacity;
      el.style.height = markerOptions.size + 'px';
      el.style.width = markerOptions.size + 'px';

      if (this.$slots.marker) {
        markerOptions.element = this.$slots.marker[0].elm;
      } else {
        markerOptions.element = el;
      }

      // this.marker = new this.mapbox.Marker(el);
      this.marker = new this.mapbox.Marker(el);

      if (this.$listeners["update:coordinates"]) {
        this.marker.on("dragend", event => {
          let newCoordinates;
          if (this.coordinates instanceof Array) {
            newCoordinates = [ event.target._lngLat.lng, event.target._lngLat.lat ];
          } else {
            newCoordinates = event.target._lngLat;
          }
          this.$emit("update:coordinates", newCoordinates);
        });
      }

      // if (this.$props.selected) {
      //   console.log('CircleMarker.vue createCircleMarker, this.$props.selected is true');
      //   this.togglePopup();
      // }

      const eventNames = Object.keys(markerEvents);
      this.$_bindSelfEvents(eventNames, this.marker);

      this.initial = false;
      this.$_addMarker();
    },

    $_addMarker() {
      this.marker.setLngLat(this.coordinates).addTo(this.map);
      this.$_bindMarkerDOMEvents();
      this.$_emitEvent("added", { marker: this.marker });
    },

    $_emitSelfEvent(event) {
      // console.log('CircleMarker.vue, $_emitSelfEvent is running');
      this.$_emitMapEvent(event, { marker: this.marker });
    },

    $_bindMarkerDOMEvents() {
      Object.keys(this.$listeners).forEach(key => {
        if (Object.values(markerDOMEvents).includes(key)) {
          this.marker._element.addEventListener(key, event => {
            this.$_emitSelfEvent(event);
          });
        }
      });
    },

    remove() {
      this.marker.remove();
      this.$_emitEvent("removed");
    },

    togglePopup() {
      // console.log('CircleMarker togglePopup is running');
      return this.marker.togglePopup();
    },
  },
};
</script>

<style>

.circle-div {
  /* width: 14px;
  height: 14px; */
  border-radius: 50%;
  border-width: 1px;
  /* background-color: #03a5fc; */
  /* opacity: 0.6; */
  /* border-color: black; */
  border-style: solid;
  cursor: pointer;
}
/* z-index: 20000; */

</style>

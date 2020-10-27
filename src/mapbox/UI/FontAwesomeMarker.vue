<template>
  <div style="display: none">
    <!-- slot for custom marker -->
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
  name: "MapFontAwesomeMarker",
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
    anchor: {
      type: String,
      default: "center",
    },
    draggable: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Object,
    },
    markerId: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      initial: true,
      marker: undefined,
    };
  },

  watch: {
    featureId() {
      // console.log('FontAwesomeMarker.vue watch featureId is firing');
      if (this.initial) {
        return;
      }
      if (this.map !== undefined && this.marker !== undefined) {
        this.marker.remove();
      }
      this.createFontAwesomeMarker();
    },
    icon() {
      // console.log('FontAwesomeMarker.vue watch markerId is firing');
      if (this.initial) {
        return;
      }
      if (this.map !== undefined && this.marker !== undefined) {
        this.marker.remove();
      }
      this.createFontAwesomeMarker();
    },
    draggable(next) {
      if (this.initial) {
        return;
      }
      this.marker.setDraggable(next);
    },
  },

  mounted() {
    // console.log('FontAwesomeMarker mounted running');
    this.createFontAwesomeMarker();
  },

  beforeDestroy() {
    if (this.map !== undefined && this.marker !== undefined) {
      this.marker.remove();
    }
  },

  methods: {
    createFontAwesomeMarker() {
      const markerOptions = {
        ...this.$props,
      };
      // console.log('FontAwesomeMarker.vue, markerOptions:', markerOptions, 'this.$props.icon:', this.$props.icon, 'this.$props.icon.icon:', this.$props.icon.icon);
      if (this.$slots.marker) {
        markerOptions.element = this.$slots.marker[0].elm;
      }

      let holderDiv = document.createElement('div');

      holderDiv.addEventListener('click', function(e) {
        e.stopPropagation();
      });

      holderDiv.className = 'marker-div';
      holderDiv.setAttribute('style', 'color:' + this.$props.color + ';');
      let faIcon = document.createElement('i');
      // faIcon.className = 'fa fa-map-marker-alt fa-2x marker-icon';
      faIcon.className = 'marker-icon ' + this.$props.icon.prefix + ' fa-' + this.$props.icon.icon + ' fa-' + this.$props.icon.size;

      holderDiv.appendChild(faIcon);

      this.marker = new this.mapbox.Marker(holderDiv, markerOptions);

      // console.log('FontAwesomeMarker.vue still running, this.marker:', this.marker, 'faIcon.className:', faIcon.className);

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
      return this.marker.togglePopup();
    },
  },
};
</script>

<style>

.marker-div {
  /* color: purple; */
  cursor: pointer;
}

.marker-icon {
  /* color: blue; */
}

.test-div {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border-width: 1px;
  background-color: #03a5fc;
  opacity: 0.6;
  border-color: black;
  border-style: solid;
  cursor: pointer;
  /* z-index: 20000; */
}

</style>

<template>
  <div style="display: none">
    <!-- slot for custom marker -->
    <div class="test-div" />
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
  dragend: "dragend"
};

const markerDOMEvents = {
  click: "click",
  mouseenter: "mouseenter",
  mouseleave: "mouseleave"
};

export default {
  name: "MapIcon",
  mixins: [withEvents, withSelfEvents],

  inject: ["mapbox", "map"],

  provide() {
    const self = this;
    return {
      get marker() {
        return self.marker;
      }
    };
  },

  props: {
    // mapbox marker options
    offset: {
      type: [Object, Array],
      default: () => [0, 0]
    },
    coordinates: {
      type: Array,
      required: true
    },
    color: {
      type: String
    },
    anchor: {
      type: String,
      default: "center"
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      initial: true,
      marker: undefined
    };
  },

  watch: {
    coordinates(lngLat) {
      if (this.initial) return;
      this.marker.setLngLat(lngLat);
    },
    draggable(next) {
      if (this.initial) return;
      this.marker.setDraggable(next);
    }
  },

  mounted() {
    const markerOptions = {
      ...this.$props
    };
    console.log('Icon.vue, markerOptions:', markerOptions);
    if (this.$slots.marker) {
      markerOptions.element = this.$slots.marker[0].elm;
    }

    var el = document.createElement('div');
    el.className = 'test-div';

    this.marker = new this.mapbox.Marker(el);
    // this.marker = new this.mapbox.Marker(markerOptions);

    if (this.$listeners["update:coordinates"]) {
      this.marker.on("dragend", event => {
        let newCoordinates;
        if (this.coordinates instanceof Array) {
          newCoordinates = [event.target._lngLat.lng, event.target._lngLat.lat];
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

  beforeDestroy() {
    if (this.map !== undefined && this.marker !== undefined) {
      this.marker.remove();
    }
  },

  methods: {
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
    }
  }
};
</script>

<style>

/* .mapboxgl-marker { */
.markertest {
  icon-image: url('https://mapboard-images.s3.amazonaws.com/camera.png');
  background-size: cover;
  width: 30px;
  height: 21.5px;
  /* border-radius: 20%; */
  cursor: pointer;
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

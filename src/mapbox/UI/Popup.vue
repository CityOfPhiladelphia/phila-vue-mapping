<template>
  <div style="display: none">
    <!-- @slot Slot for popup content -->
    <slot />
  </div>
</template>

<script>
import withEvents from "../lib/withEvents";
import withSelfEvents from "./withSelfEvents";

const popupEvents = {
  open: "open",
  close: "close",
};

/**
 * Popup component.
 * @see See [Mapbox Gl JS Popup](https://www.mapbox.com/mapbox-gl-js/api/#popup)
 */
export default {
  name: "Popup",
  mixins: [ withEvents, withSelfEvents ],

  inject: {
    mapbox: {
      default: null,
    },
    map: {
      default: null,
    },
    marker: {
      default: null,
    },
  },

  props: {
    /**
     * If `true`, a close button will appear in the top right corner of the popup.
     * Mapbox GL popup option.
     */
    closeButton: {
      type: Boolean,
      default: true,
    },
    /**
     * Mapbox GL popup option.
     * If `true`, the popup will closed when the map is clicked. .
     */
    closeOnClick: {
      type: Boolean,
      default: true,
    },
    /**
     * Mapbox GL popup option.
     * A string indicating the popup's location relative to the coordinate set.
     * If unset the anchor will be dynamically set to ensure the popup falls within the map container with a preference for 'bottom' .
     *  'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'
     */
    anchor: {
      validator(value) {
        let allowedValues = [
          "top",
          "bottom",
          "left",
          "right",
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
        ];
        return typeof value === "string" && allowedValues.includes(value);
      },
      default: undefined,
    },
    /**
     * Mapbox GL popup option.
     * A pixel offset applied to the popup's location
     * a single number specifying a distance from the popup's location
     * a PointLike specifying a constant offset
     * an object of Points specifing an offset for each anchor position Negative offsets indicate left and up.
     */
    offset: {
      type: [ Number, Object, Array ],
      default: () => [ 0, 0 ],
    },
    coordinates: {
      type: Array,
    },

    /**
     * Component option.
     * If `true`, popup treats data in deafult slot as plain text
     */
    onlyText: {
      type: Boolean,
      default: false,
    },

    showed: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      initial: true,
      popup: undefined,
    };
  },

  computed: {
    open: {
      get() {
        // console.log('Popup.vue computed open GET is running, this.popup:', this.popup, 'this.popup.isOpen():', this.popup.isOpen());
        if (this.popup !== undefined) {
          return this.popup.isOpen();
        }
        return false;
      },
      set(value) {
        // console.log('Popup.vue computed open SET is running, this.popup:', this.popup, 'this.popup.isOpen():', this.popup.isOpen(), 'this.value:', this.value);
        if (this.map && this.popup) {

          if (!value) {
            this.popup.remove();
          } else {
            this.popup.addTo(this.map);
          }

        }
      },
    },
  },

  watch: {
    coordinates(lngLat) {
      if (this.initial) {
        return;
      }
      this.popup.setLngLat(lngLat);
    },

    showed(next, prev) {
      // console.log('Popup.vue watch showed is firing, next:', next);
      if (next !== prev) {
        this.open = next;
        if (this.marker) {
          // console.log('Popup.vue watch showed, if this.marker is true, this.marker.togglePopup():', this.marker.togglePopup);
          this.marker.togglePopup();
        }
      }
    },
  },

  created() {
    this.popup = new this.mapbox.Popup(this.$props);
    // console.log('Popup.vue created is running, this.popup:', this.popup);
    // this.marker.togglePopup();
  },

  mounted() {
    // console.log('popup mounted');
    this.$_addPopup();
    this.initial = false;
  },

  beforeDestroy() {
    if (this.map) {
      this.popup.remove();
      this.$_emitEvent("removed");
    }
  },

  methods: {
    $_addPopup() {
      this.popup = new this.mapbox.Popup(this.$props);
      if (this.coordinates !== undefined) {
        this.popup.setLngLat(this.coordinates);
      }
      if (this.$slots.default !== undefined) {
        if (this.onlyText) {
          if (this.$slots.default[0].elm.nodeType === 3) {
            let tmpEl = document.createElement("span");
            tmpEl.appendChild(this.$slots.default[0].elm);
            this.popup.setText(tmpEl.innerText);
          } else {
            this.popup.setText(this.$slots.default[0].elm.innerText);
          }
        } else {
          this.popup.setDOMContent(this.$slots.default[0].elm);
        }
      }

      this.$_bindSelfEvents(Object.keys(popupEvents), this.popup);

      this.$_emitEvent("added", { popup: this.popup });

      if (this.marker) {
        // console.log('Popup.vue, there is a this.marker:', this.marker);
        this.marker.setPopup(this.popup);
      }
      if (this.showed) {
        // console.log('Popup.vue $_addPopup is running and if this.showed is true, this.popup.isOpen():', this.popup.isOpen());

        if (this.marker) {

          this.marker.togglePopup();
          // console.log('there is a marker, this.popup.isOpen():', this.popup.isOpen());
        }
      }
    },

    $_emitSelfEvent(event) {
      this.$_emitMapEvent(event, { popup: this.popup });
    },

    remove() {
      // console.log('Popup.vue remove is running');
      this.popup.remove();
      this.$_emitEvent("remove", { popup: this.popup });
    },
  },
};
</script>

<style>

.mapboxgl-popup {
  z-index: 11;
}

.mapboxgl-popup-content {
  padding-right: 16px;
}

.mapboxgl-popup-close-button {
  height: 30px;
  width: 30px;
  font-size: 24px;
  line-height: 0px;
}

</style>

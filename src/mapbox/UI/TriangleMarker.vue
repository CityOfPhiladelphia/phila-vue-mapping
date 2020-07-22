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
  name: "MglTriangleMarker",
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
    rotationAngle: {
      type: Number,
    },
    hFov: {
      type: Number,
    },
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
    coneCoords() {
      // const hFovDegrees = this.hFov * (180/3.14159265359);
      const scale = 50;//options.scale;
      const angle = this.hFov / 2.0;
      const width = Math.sin(angle * Math.PI / 180);
      const length = Math.sqrt(1.0 - width * width);
      const coneCoords = [ width * scale, length * scale ];

      return coneCoords;
    },
    iconSize() {
      return [ this.coneCoords[0], this.coneCoords[1] ];
    },
    iconAnchor() {
      return [ this.coneCoords[0] / 2, this.coneCoords[1] ];
    },
  },
  watch: {
    featureId() {
      // console.log('TriangleMarker.vue watch featureId is firing');
      if (this.initial) {
        return;
      }
      if (this.map !== undefined && this.marker !== undefined) {
        this.marker.remove();
      }
      this.createTriangleMarker();
    },
    size() {
      if (this.initial) {
        return;
      }
      if (this.map !== undefined && this.marker !== undefined) {
        this.marker.remove();
      }
      this.createTriangleMarker();
    },
    fillColor() {
      // console.log('TriangleMarker.vue watch markerId is firing');
      if (this.initial) {
        return;
      }
      if (this.map !== undefined && this.marker !== undefined) {
        this.marker.remove();
      }
      this.createTriangleMarker();
    },
    draggable(next) {
      if (this.initial) {
        return;
      }
      this.marker.setDraggable(next);
    },
  },
  mounted() {
    this.createTriangleMarker();
  },
  beforeDestroy() {
    // console.log('TriangleMarker.vue beforeDestroy() is running');
    if (this.map !== undefined && this.marker !== undefined) {
      this.marker.remove();
    }
  },
  methods: {
    createPathDescription: function () {
      const height = Number(this.iconSize[1]);
      const width = Number(this.iconSize[0]);
      // const weight = Number(this.options.weight);
      const weight = 1;
      const margin = weight;

      const startPoint = "M " + margin + " " + (0) + " ";
      const leftLine = "L " + (width / 2) + " " + (height - margin) + " ";
      const rightLine = "L " + (width - margin) + " " + (0) + " Z";
      const d = startPoint + leftLine + rightLine;

      return d;
    },
    createTriangleMarker() {
      const markerOptions = {
        ...this.$props,
      };

      console.log('TriangleMarker.vue createTriangleMarker is running, markerOptions:', markerOptions);

      let path = this.createPathDescription();

      console.log('path:', path);

      var svgEl = document.createElement('svg');

      // el.addEventListener('click', function(e) {
      //   // console.log('click');
      //   e.stopPropagation();
      // });

      svgEl.className = 'svg-area';
      svgEl.style.width='200px';
      svgEl.style.height='200px';
      // svgEl.style.width=this.coneCoords[0] + 'px';
      // svgEl.style.height=this.coneCoords[1] + 'px';

      var pathEl = document.createElement('path');

      // pathEl.setAttribute('width', '200px');
      // pathEl.setAttribute('height', '200px');
      pathEl.setAttribute('stroke-width', markerOptions.weight);
      pathEl.setAttribute('stroke', 'black');
      pathEl.setAttribute('fill', 'none');
      pathEl.setAttribute('d', path);
      // pathEl.style['stroke-width'] = markerOptions.weight;
      // pathEl.style['stroke'] = 'black';
      // pathEl.style['fill'] = 'none';
      // pathEl.style['d'] = path;

      svgEl.appendChild(pathEl);

      // if (markerOptions.data && markerOptions.data.featureId) {
      //   el.setAttribute('feature', markerOptions.data.featureId);
      // }
      // console.log('el:', el);

      // if (this.$slots.marker) {
      //   markerOptions.element = this.$slots.marker[0].elm;
      // } else {
      //   markerOptions.element = el;
      // }



      // this.marker = new this.mapbox.Marker(el);
      this.marker = new this.mapbox.Marker(svgEl);

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
      //   console.log('TriangleMarker.vue createTriangleMarker, this.$props.selected is true');
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
      // console.log('TriangleMarker.vue, $_emitSelfEvent is running');
      this.$_emitMapEvent(event, { marker: this.marker });
    },

    $_bindMarkerDOMEvents() {
      Object.keys(this.$listeners).forEach(key => {
        // console.log('$_bindMarkerDOMEvents is running, key:', key);
        if (Object.values(markerDOMEvents).includes(key)) {
          // console.log('if includes key is running:', key);
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
      // console.log('TriangleMarker togglePopup is running');
      return this.marker.togglePopup();
    },
  },
};
</script>

<style>

.circle-div {
  /* width: 14px;
  height: 14px; */
  /* border-radius: 50%; */
  border-width: 1px;
  /* background-color: #03a5fc; */
  /* opacity: 0.6; */
  /* border-color: black; */
  border-style: solid;
  cursor: pointer;
  z-index: 1;
}

</style>

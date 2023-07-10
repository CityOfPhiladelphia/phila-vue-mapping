import controlMixin from "./controlMixin";
import withEvents from "../../lib/withEvents";
import withSelfEvents from "../withSelfEvents";

const geolocationEvents = {
  trackuserlocationstart: "trackuserlocationstart",
  trackuserlocationend: "trackuserlocationend",
  geolocate: "geolocate",
  error: "error",
};

export default {
  name: "GeolocateControl",
  mixins: [ withEvents, withSelfEvents, controlMixin ],

  props: {
    positionOptions: {
      type: Object,
      default() {
        return {
          enableHighAccuracy: false,
          timeout: 6000,
        };
      },
    },
    fitBoundsOptions: {
      type: Object,
      default: () => ({ maxZoom: 15 }),
    },
    trackUserLocation: {
      type: Boolean,
      default: false,
    },
    showUserLocation: {
      type: Boolean,
      default: true,
    },
  },

  created() {
    // const GeolocateControl = this.mapbox.GeolocateControl;
    // this.control = new GeolocateControl(this.$props);
    // this.$_addControl();
    // this.$_bindSelfEvents(Object.keys(geolocationEvents), this.control);
  },
  mounted() {
    console.log('GeolocateControl mounted is running, this.map:', this.map);
    // this.map.on('load', function() {
    //   console.log('GeolocateControl mounted map.on("load") is running');
    // })
    let map = this.$store.map;
    map.on('geolocate', function(e) {
      console.log('test geolocate event:', e);
    });
  },

  methods: {
    parentMounted(parent) {
      console.log('GeolocateControl parentMounted is running, parent:', parent, 'parent.map:', parent.map);
      const GeolocateControl = this.mapbox.GeolocateControl;
      this.control = new GeolocateControl(this.$props);
      this.$_addControl();
      this.$_bindSelfEvents(Object.keys(geolocationEvents), this.control);
    
      // console.log('GeolocateControl created GeolocateControl:', GeolocateControl, 'this.control:', this.control);

      // parent.on()
      // parent.map.on("load", function () {
      //   console.log('GeolocateControl parentMounted map.on("load") is running');
      //   // geolocate.trigger(); // add this if you want to fire it by code instead of the button
      // });
    },
    trigger() {
      if (this.control) {
        return this.control.trigger();
      }
    },
  },
};

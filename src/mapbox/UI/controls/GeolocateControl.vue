<script>

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
    showAccuracyCircle: {
      type: Boolean,
      default: false,
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
    const GeolocateControl = this.mapbox.GeolocateControl;
    this.control = new GeolocateControl(this.$props);
    this.$_addControl();
    this.$_bindSelfEvents(Object.keys(geolocationEvents), this.control);

    this.control.on('geolocate', this.emitGeolocate);
    // this.control.on('geolocate', function(e) {
    //   console.log('e' , e, 'e.coords.latitude:', e.coords.latitude);//, 'this.testMethod():', this.testMethod());
    //   // this.$emit('geolocate-control-fire', e);
    //   // this.trigger();
    // });

  },
  // mounted() {
  //   this.trigger();
  // },

  methods: {
    emitGeolocate(e) {
      console.log('GeolocateControl emitGeolocate is running, e:', e);
      this.$emit('geolocate-control-fire', e);
    },
    // trigger() {
    //   console.log('GeolocateControl trigger is running');
    //   if (this.control) {
    //     this.control.on('geolocate', function(e) {
    //       console.log('e' , e, 'e.coords.latitude:', e.coords.latitude);
    //     });
    //   }
    // },
  },
};

</script>

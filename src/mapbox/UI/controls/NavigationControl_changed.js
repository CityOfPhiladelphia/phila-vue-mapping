import controlMixin from "./controlMixin";

export default {
  name: "NavigationControl",
  mixins: [ controlMixin ],

  props: {
    showCompass: {
      type: Boolean,
      default: true,
    },
    showZoom: {
      type: Boolean,
      default: true,
    },
  },

  created() {
    console.log('NavigationControl created, this.$store.state.map.map:', this.$store.state.map.map);
    // this.control = new this.mapbox.NavigationControl(this.$props);
    // this.$_addControl();
  },
  mounted() {
    console.log('NavigationControl mounted, this.map:', this.map, 'this.$store.state.map:', this.$store.state.map);
  },
  methods: {
    parentMounted(parent) {
      console.log('NavigationControl parentMounted is running, this.$store.state.map:', this.$store.state.map);
      this.control = new this.mapbox.NavigationControl(this.$props);
      this.$_addControl();
    },
  },
};

// import withRegistration from "../../../lib/withRegistration";
import withEvents from "../../lib/withEvents";
import withSelfEvents from "../withSelfEvents";

export default {
  mixins: [withEvents, withSelfEvents],

  // inject: ["mapbox", "map", "actions"],
  inject: ["mapbox", "actions"],

  props: {
    position: {
      type: String,
      default: "top-right"
    }
  },

  beforeDestroy() {
    if (this.map && this.control) {
      this.map.removeControl(this.control);
    }
  },
  computed: {
    map() {
      return this.$store.state.map.map;
    }
  },
  methods: {
    $_addControl() {
      console.log('controlMixin $_addControl is running, this.control:', this.control, 'this.map:', this.map);
      try {
        this.map.addControl(this.control, this.position);
      } catch (err) {
        this.$_emitEvent("error", { error: err });
        return;
      }
      this.$_emitEvent("added", { control: this.control });
    }
  },

  render() {}
};

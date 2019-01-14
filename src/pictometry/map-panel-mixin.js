export default {
  name: 'pictometryMixin',
  computed: {
    pictometryActive() {
      return this.$store.state.pictometry.active;
    }
  }
};

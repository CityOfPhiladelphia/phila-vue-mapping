// shout out to airyland
// https://github.com/airyland/vue-config/blob/master/index.js

export default (Vue, config) => {
  Vue.mixin({
    created() {
      this.$config = config;
    }
  });
};

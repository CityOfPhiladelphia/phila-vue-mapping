import Controller from './controller';

function controllerMixin(Vue, opts) {
  const controller = new Controller(opts);

  Vue.mixin({
    created() {
      this.$controller = controller;
    }
  });
}

export default controllerMixin;

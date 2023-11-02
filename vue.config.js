const Visualizer = require('webpack-visualizer-plugin');
const ExtractTextPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  configureWebpack: {
    plugins: [
      new Visualizer({ filename: './statistics.html' }),
    ],
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');

    config.plugin('extract-css')
      .use(ExtractTextPlugin, [{
        filename:  'css/[name].css',
        allChunks: true,
      }]);
  },
};

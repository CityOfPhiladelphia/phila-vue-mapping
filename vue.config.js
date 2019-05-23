const Visualizer = require('webpack-visualizer-plugin');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('mini-css-extract-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
      new Visualizer({ filename: './statistics.html' })
    ],
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')

    config.plugin('extract-css')
      .use(ExtractTextPlugin, [{
        filename:  'css/[name].css',
        allChunks: true
      }])
  }
}

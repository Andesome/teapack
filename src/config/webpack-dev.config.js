const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./webpack-base.config');
const autoprefixer = require.resolve('autoprefixer');

config.mode('development');
config.devtool('eval-source-map');


config.devServer
  .hot(true)
  .inline(true);

config.module
  .rule('less')
  .test(/\.(le|c)ss$/)
  .use('style')
    .loader(require.resolve('style-loader'))
    .end()
  .use('css')
    .loader(require.resolve('css-loader'))
    .options({
      sourceMap: true,
      modules: true,
      importLoaders: 2,
      localIdentName: "[local]___[hash:base64:5]"
    })
    .end()
  .use('less')
    .loader(require.resolve('less-loader'))
    .end();

config.plugin('clean-webpack')
    .use(CleanWebpackPlugin)
    .end()
    .plugin('hmr')
    .use(webpack.HotModuleReplacementPlugin);
    

// const arr = makeArray(config.entry('index'));

// console.log('config', config.toString());

module.exports = config;

import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './common';
import 'webpack-dev-server';

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  devServer: {
    static: './dist',
    port: 8000,
    hot: true
  },
  devtool: 'inline-source-map'
});

export default config;

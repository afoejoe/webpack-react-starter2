import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';
import 'webpack-dev-server';
import path from 'path';

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../public')
    },
    port: 8000,
    hot: true
  },
  devtool: 'inline-source-map'
});

export default config;

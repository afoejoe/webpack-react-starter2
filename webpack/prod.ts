import webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './common';

const config: webpack.Configuration = merge(common, {
  mode: 'production'
});

export default config;

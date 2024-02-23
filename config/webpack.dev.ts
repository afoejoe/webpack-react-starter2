import path from 'path'

import merge from 'webpack-merge'

import common from './webpack.common'

import type webpack from 'webpack'


import 'webpack-dev-server'


const config: (env: ENV) => webpack.Configuration = env =>
  merge(common(env), {
    mode: 'development',
    devServer: {
      static: {
        directory: path.join(__dirname, '../public'),
      },
      port: 8000,
      hot: true,
    },
    devtool: 'inline-source-map',
    stats: {
      errorDetails: true,
    },
  })

export default config

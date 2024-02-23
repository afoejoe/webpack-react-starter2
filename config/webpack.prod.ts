import { merge } from 'webpack-merge'

import common from './webpack.common'

import type webpack from 'webpack'

const config: (env: ENV) => webpack.Configuration = env =>
  merge(common(env), {
    mode: 'production',
    devtool: 'source-map',
  })

export default config

import path from 'path'

import { EsbuildPlugin } from 'esbuild-loader'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import type webpack from 'webpack'

const common: (env: ENV) => webpack.Configuration = env => ({
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: 'single',
    usedExports: true,
    minimizer: [
      new EsbuildPlugin({
        target: 'es2015',
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.([jt])sx?$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'React App',
      template: 'src/index.html',
    }),
    new EsbuildPlugin({
      define: {
        'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV ?? 'production'),
      },
    }),
  ],
})

export default common

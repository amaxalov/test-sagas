const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  name: 'client',
  target: 'web',
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/client.tsx')],
  output: {
     filename: '[name].js',
     path: path.resolve(__dirname, '../build'),
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public/favicon.ico'),
          to: path.resolve(__dirname, '../build'),
        },
      ],
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: module => /node_modules/.test(module.resource),
          enforce: true,
        },
      },
    },
  },
};
module.exports = merge(baseConfig, config);

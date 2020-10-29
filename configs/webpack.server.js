const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  name: 'server',
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/server.tsx')],
  output: {
     filename: 'server.js',
     path: path.resolve(__dirname, '../build'),
  },
  externals: [webpackNodeExternals()],
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  }
};
module.exports = merge(baseConfig, config);

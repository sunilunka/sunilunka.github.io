'use strict'
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './dev/dev-server/components/app.js',
    output: {
      path: './dev/app/scripts',
      filename: 'app.js'
    },
    module: {
      preloaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }],
      loaders: [{
        test: /\.(js|jsx|es6)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    }
  }

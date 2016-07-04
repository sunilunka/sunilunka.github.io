'use strict'
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './dev/dev-server/app.js',
    output: {
      path: './dev/app/scripts',
      filename: 'app.js'
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }]
    }
  }

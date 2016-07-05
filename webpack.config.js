'use strict'
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './dev/dev-server/js/app.jsx',
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    }
  }

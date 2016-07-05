var webpack = require('webpack');
var config = require(process.cwd() + '/webpack.config.js');

var initBuild = (webpackConfig) => {
  let startTime = Date.now();
  console.log("STARTING BUILD...");
  webpack(webpackConfig);
  let stopTime = Date.now();
  console.log("ELAPSED TIME: ", stopTime - startTime + 'ms');
}

initBuild(config);

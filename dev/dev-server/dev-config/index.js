module.exports = function(app){
  const chalk = require('chalk');
  const path = require('path');
  const express = require('express');

  let rootPath = path.join(__dirname, '../../../');
  let staticPath = path.join(rootPath, '/dev/app/');
  let packagesPath = path.join(rootPath, '/node_modules');
  let indexHTML = path.join(staticPath, 'index.html');

  app.set('indexHTMLPath', staticPath);
  app.use(express.static(staticPath))
  app.use(express.static(packagesPath))

}

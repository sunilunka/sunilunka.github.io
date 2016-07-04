const chalk = require('chalk');
const express = require('express');
const path = require('path');


var app = express();

express.static(path.join(__dirname, "../app"));

require('./dev-config')(app);

app.use('/*', function(req, res, next){
  console.log("REQ: ", req);
  console.log("APPLICATION IS RUNNING...");

  res.sendFile(app.get('indexHTMLPath'));
})


var startServer = function(){
  let port = 3000;

  app.listen(port, function(){
    console.log(chalk.cyan("SERVER IS UP ON PORT "), chalk.magenta(port));
  });

}

startServer();

var express = require('express');
var moment = require('moment');
var app = express();
app.get('/', function (req, res) {
  var currTime= moment().format("YYYY-MM-DD HH:mm:ss");
  console.log('[INFO] - ',currTime,' - Request from',req.ip,req.url);
  res.send(`Hello at ${currTime}`);
});
app.listen(3000, function () {
  console.log('[INFO] - ',moment().format("YYYY-MM-DD HH:mm:ss"),'Example app listening on port 3000!');
});

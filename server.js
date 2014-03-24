var express = require('express');
var context = require('rabbit.js').createContext('queue.getinter.io');

var app = express();

var pub = context.socket('PUBLISH');
var sub = context.socket('SUBSCRIBE');

app.get('/', function(req, res){
      res.sendfile('index.html');
});

app.get('/send', function(req, res){
    // send req.body to RMQ
});

var server = app.listen(3000, function() {
        console.log('Listening on port %d', server.address().port);
});

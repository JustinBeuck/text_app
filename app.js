var express = require('express');
var mongoose = require('mongoose');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var routes = require('./routes');

mongoose.connect('mongodb://localhost/text-app');

var TextMessage = require('./models/text_message.js');

app.use("/public", express.static(path.join(__dirname, 'public')));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine({ jsx: {}  }));

app.get('/', routes.index);

io.on('connection', function(socket){
    socket.on('send', function(data) {
        var text = new TextMessage(data);
        text.save(function (err) {
            TextMessage.find({number: data.number}, function(err, texts) {
                socket.emit('receive', texts)
            });
        })
    })
});


http.listen(3000)

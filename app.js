var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var routes = require('./routes')

app.use("/public", express.static(path.join(__dirname, 'public')));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine({ jsx: {}  }));

app.get('/', routes.index);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('message', function(data) {
        console.log("received data", data)
        socket.emit('message', "hey dude")
    })
});


http.listen(3000)

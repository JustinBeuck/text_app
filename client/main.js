React = require('react');
var io = require('socket.io-client');

var socket = io()

socket.on('connect', function(){
    console.log("connected to socket")
    socket.emit('message', {
        "name": "jake"
    });
});

socket.on('message', function(data){
    console.log("received data: ", data)
});

socket.on('disconnect', function(){});

var Test = React.createFactory(require('./components/test.jsx')); 

React.render(Test(), document.getElementById('test'));

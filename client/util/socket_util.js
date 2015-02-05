var io = require('socket.io-client');

var SocketUtil = {
    ready: false,

    init: function () {
        var self = this;
        this.socket = io();
        this.socket.on('connect', function () {
            self.ready = true;
            console.log('socket is ready')
        })
    },

    isReady: function () {
        return this.ready;
    },

    emit: function () {

    }
}

//socket.on('connect', function(){
    //console.log("connected to socket")
    //socket.emit('message', {
        //"name": "jake"
    //});
//});

//socket.on('message', function(data){
    //console.log("received data: ", data)
//});

//socket.on('disconnect', function(){});

module.exports = SocketUtil;

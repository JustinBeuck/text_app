var io = require('socket.io-client');

var TextsUtil = {
    init: function (callback) {
        var self = this;
        this.socket = io();
        this.socket.on('connect', function() {
            self.ready = true;
            self.receive(callback);
        })
    },

    send: function (text) {
        if (this.ready && text) {
            this.socket.emit('send', text);
        } else {
            console.log("Please init TextUtil")
        }
    },

    receive: function (callback) {
        this.socket.on('receive', function (data) {
            return callback(data)
        })
    }
}

module.exports = TextsUtil;

var mongoose = require('mongoose');
var text = require('./text.js')

var schema = new mongoose.Schema({
     active     : Boolean
    , number : Number
    , texts     : [text]
    , date       : Date
});

module.exports = mongoose.model('Conversation', schema);

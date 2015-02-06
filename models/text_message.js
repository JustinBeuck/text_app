var mongoose = require('mongoose');

var schema = new mongoose.Schema({
     number : Number
    , message     : String
    , date       : Date
    , received   : Boolean
});

module.exports = TextMessage = mongoose.model('TextMessage', schema);

React = require('react');
TextsUtil = require('./util/texts_util.js');

var NewConversation = React.createFactory(require('./components/conversations/new_conversation.jsx')); 

React.render(NewConversation(), document.getElementById('newConversation'));

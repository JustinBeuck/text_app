React = require('react');
_ = require('lodash');

TextsUtil = require('./util/texts_util.js');

var ConversationBlock = React.createFactory(require('./components/conversations/conversation_block.jsx')); 

React.render(ConversationBlock(), document.getElementById('newConversation'));

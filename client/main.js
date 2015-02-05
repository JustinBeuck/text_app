React = require('react');
SocketUtil = require('./util/socket_util.js');



var Test = React.createFactory(require('./components/test.jsx')); 

React.render(Test(), document.getElementById('test'));

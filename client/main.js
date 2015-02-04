var React = require('react');

var Test = React.createFactory(require('./components/test.jsx')); 

React.render(Test(), document.getElementById('test'));

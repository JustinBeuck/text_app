var express = require('express');
var app = express();
var path = require('path');

app.use("/public", express.static(path.join(__dirname, 'public')));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine({ jsx: {}  }));

app.get('/', require('./routes').index);

app.listen(3000)

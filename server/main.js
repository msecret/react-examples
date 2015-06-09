
require('node-jsx').install();

var express  = require('express');
var exphbs = require('express-handlebars');

var App = require('./app');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  var markup = React.renderToString(App());
  res.send(markup);
});

app.listen('4000', function() {
  console.log('listenting on 4000');
});


var React = require('react');

var Accordion = require('../src/components/accordion/accordion.jsx');

//import './css/vars.css';
//import './css/atom/headings.css';
//import './css/atom/links.css';

var items = [];

items.push({
  title: 'Item A',
  p: 'Some content that says something simple'
});

var App = React.createClass({
  render: function() {
    return (
    <html>
      <head>
          <meta charset="utf-8"></meta>
          <link rel="stylesheet" type="text/css" href="public/style.css"></link>
      </head>
      <body>
        <h2>Title of the page</h2>
        <p>should be <a href="#">green</a></p>
        <Accordion content={ items[0] } />

        <script type="text/javascript" src="public/bundle.js" charset="utf-8">
        </script>
      </body>
    </html>
    );
  }
});

module.exports = App;

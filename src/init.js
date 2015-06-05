require('./css/main.css');
require('./css/vars.css');
require('./css/atom/headings.css');
require('./css/atom/links.css');

var accordion = require('./components/accordion/accordion.js');

document.querySelector('body').appendChild(accordion.init());

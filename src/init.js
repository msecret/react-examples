
import React from 'react';

import Accordion from './components/accordion/accordion.jsx'

import './css/vars.css';
import './css/atom/headings.css';
import './css/atom/links.css';

var items = [];

items.push({
  title: 'Item A',
  p: 'Some content that says something simple'
});
items.push({
  title: 'Item B',
  p: 'Different content that says something else simple'
});

React.render(<Accordion content={ items[0] } />,
    document.querySelector('.js-accordion'));

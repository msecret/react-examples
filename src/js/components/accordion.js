
var styles = require('../../css/components/accordion.css');

var accordion = {
  init: function() {
    var el = document.createElement('div');
    el.innerHTML = 'should be something';
    el.setAttribute('class', styles.foo);
    return el;
  }
};

module.exports = accordion;

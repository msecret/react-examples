
var styles = require('./accordion.css');

var accordion = {
  init: function() {
    var el = document.createElement('div');
    el.innerHTML = '<h2 class="test">should be something</h2>';
    el.setAttribute('class', styles.foo);
    return el;
  }
};

module.exports = accordion;

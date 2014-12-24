/** @jsx React.DOM */

(function () {
  'use strict';

  var React   = require('react'),
    Pane = require('./pane.jsx');

  React.render(
    <Pane />,
    document.getElementById('pane')
  );

}());

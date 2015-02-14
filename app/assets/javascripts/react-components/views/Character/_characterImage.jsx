/** @jsx React.DOM */

(function () {
  'use strict';
  var _characterTitle = require('./_characterTitle.jsx');

  var _characterImage = React.createClass({

    render: function() {
      return (
        <div className="PersonaImage">
          <img src="/images/img--persona.jpg" />
        </div>
      );
    }
  });

  module.exports = _characterImage;

}());


/** @jsx React.DOM */

(function () {
  'use strict';
  var _personaTitle = require('./_personaTitle.jsx');

  var _personaImage = React.createClass({

    render: function() {
      return (
        <div className="PersonaImage">
          <img src="/images/img--persona.jpg" />
        </div>
      );
    }
  });

  module.exports = _personaImage;

}());


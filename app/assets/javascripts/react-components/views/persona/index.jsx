/** @jsx React.DOM */

(function () {
  'use strict';
  var _personaTitle = require('./_personaTitle.jsx');
  var _personaQuote = require('./_personaQuote.jsx');
  var _personaName = require('./_personaName.jsx');
  var _personaImage = require('./_personaImage.jsx');
  var Forces = require('./forces/Forces.jsx');
  var Features = require('./features/Features.jsx');

  var Persona = React.createClass({

    render: function() {
      return (
        <div>
          <_personaTitle></_personaTitle>
          <_personaQuote>
            <_personaImage></_personaImage>
          </_personaQuote>
          <_personaName>
          </_personaName>
          <hr className="mvn" />
          <Forces />
          <Features />
        </div>
      );
    }
  });

  module.exports = Persona;

}());

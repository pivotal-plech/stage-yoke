/** @jsx React.DOM */

(function () {
  'use strict';
  var _characterTitle = require('./_characterTitle.jsx');
  var _characterQuote = require('./_characterQuote.jsx');
  var _characterName = require('./_characterName.jsx');
  var _characterImage = require('./_characterImage.jsx');
  var Forces = require('./forces/Forces.jsx');
  var Features = require('./features/Features.jsx');

  var Character = React.createClass({

    render: function() {
      return (
        <div>
          <_characterTitle></_characterTitle>

          <_characterQuote>
            <_characterImage></_characterImage>
          </_characterQuote>

          <_characterName></_characterName>

          <hr className="mvn" />
          <Forces />
          <Features />
        </div>
      );
    }
  });

  module.exports = Character;

}());

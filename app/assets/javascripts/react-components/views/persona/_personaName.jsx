/** @jsx React.DOM */

(function () {
  'use strict';
  var _personaTitle = require('./_personaTitle.jsx');

  var _personaName = React.createClass({

    render: function() {
      return (
        <div className="bg-neutral-11">
          <div className="ptxxxl pbxxl">
            <h1 className="txt-c em-low mvn type-dark-1">Claudia Cloudy</h1>
            <h2 className="type-sm txt-c em-low mvn type-neutral-3 em-alt">Cloud Operator</h2>
            </div>
          <hr className="mvn" />
        </div>
      );
    }
  });

  module.exports = _personaName;

}());

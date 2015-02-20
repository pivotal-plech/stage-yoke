/** @jsx React.DOM */

(function () {
  'use strict';

  var _characterTitle = React.createClass({

    render: function() {
      return (
        <h2 className="type-sm txt-c em-low mvn type-neutral-3 em-alt">{this.props.title}</h2>
      );
    }
  });

  module.exports = _characterTitle;

}());


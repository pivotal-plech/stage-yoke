/** @jsx React.DOM */

(function () {
  'use strict';

  var _characterTitle = require('./_characterTitle.jsx');

  var _characterName = React.createClass({

    render: function() {
      return (
        <div className="bg-neutral-11">
          <div className="ptxxxl pbxxl">
            <h1 className="txt-c em-low mvn type-dark-1">{this.props.name}</h1>
            <_characterTitle title={this.props.title} />
            </div>
          <hr className="mvn" />
        </div>
      );
    }
  });

  module.exports = _characterName;

}());

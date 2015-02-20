/** @jsx React.DOM */

(function () {
  'use strict';

  var _characterImage = React.createClass({

    render: function() {
      return (
        <div className="PersonaImage">
          <img src={this.props.avatar} />
        </div>
      );
    }
  });

  module.exports = _characterImage;

}());


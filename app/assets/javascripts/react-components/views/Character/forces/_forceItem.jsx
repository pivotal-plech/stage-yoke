/** @jsx React.DOM */

(function () {
  'use strict';

  var _forceItem = React.createClass({

    render: function() {
      var forceStyle = {
        height: '75px'
      }

      return (
        <div className="col-md-12">
          <div className="panel panel-basic bg-neutral-11 pal" style={forceStyle}>
            <p className="type-xs mbn">{this.props.force}</p>
          </div>
        </div>
      );
    }
  });

  module.exports = _forceItem;

}());

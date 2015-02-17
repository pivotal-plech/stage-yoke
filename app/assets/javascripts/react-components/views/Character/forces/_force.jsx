/** @jsx React.DOM */

(function () {
  'use strict';
  var _forceItem = require('./_forceItem.jsx');

  var _force = React.createClass({

    render: function() {

      var forcesHeight = {
        minHeight: "600px"
      }

      return (
        <div className="col-sm-12 force" style={forcesHeight}>
          <div className="force-inner">
            <h1 className="em-alt type-sm txt-c">{this.props.forceTitle}</h1>
            <hr className="mtn" />

            <div className="col-md-24">
              <div className="row">
                <_forceItem></_forceItem>
                <_forceItem></_forceItem>
              </div>
              <div className="row">
                <_forceItem></_forceItem>
                <_forceItem></_forceItem>
              </div>
              <div className="row">
                <_forceItem></_forceItem>
                <_forceItem></_forceItem>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  module.exports = _force;

}());



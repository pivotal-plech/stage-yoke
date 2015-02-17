/** @jsx React.DOM */

(function () {
  'use strict';
  var _force = require('./_force.jsx');

  var Forces = React.createClass({


    render: function() {

      var imgWidth = {
        width: "25px",
        margin: "0 auto"
      }

      return (
        <div className="bg-neutral-10 forces-diagram">

          <div className="forces aligner hidden-xs hidden-sm">
            <img src="/images/img--force.png" style={imgWidth} />
          </div>

          <div className="container-fluid">
            <div className="row">
              <_force forceTitle="Push"></_force>
              <_force forceTitle="Pull"></_force>
            </div>

            <div className="row">
              <_force forceTitle="Allegiance"></_force>
              <_force forceTitle="Anxiety"></_force>
            </div>
          </div>
        </div>
      );
    }
  });

  module.exports = Forces;

}());

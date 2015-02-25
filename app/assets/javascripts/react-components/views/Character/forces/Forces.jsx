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
              <_force forceTitle="Push" type="pushes" forces={this.props.forces.pushes}></_force>
              <_force forceTitle="Pull" type="pulls" forces={this.props.forces.pulls}></_force>
            </div>

            <div className="row">
              <_force forceTitle="Inertias" type="inertias" forces={this.props.forces.inertias}></_force>
              <_force forceTitle="Anxiety" type="anxieties" forces={this.props.forces.anxieties}></_force>
            </div>
          </div>
        </div>
      );
    }
  });

  module.exports = Forces;

}());

/** @jsx React.DOM */

(function () {
  'use strict';

  var Forces = React.createClass({


    render: function() {

      var imgWidth = {
        width: "25px",
        margin: "0 auto"
      }

      var forcesHeight = {
        height: "400px"
      }

      return (
        <div className="bg-neutral-10 txt-c forces-diagram">
          <div className="forces aligner">
            <img src="/images/img--force.png" style={imgWidth} />
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 force paxxxxl">
                <h1>Push</h1>
              </div>
              <div className="col-xs-12 force paxxxxl">
                <h1>Pull</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 force paxxxxl">
                <h1>Habit</h1>
              </div>
              <div className="col-xs-12 force paxxxxl">
                <h1>Anxiety</h1>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  module.exports = Forces;

}());

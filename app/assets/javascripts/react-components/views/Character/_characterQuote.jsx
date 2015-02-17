/** @jsx React.DOM */

(function () {
  'use strict';
  var _characterTitle = require('./_characterTitle.jsx');

  var _characterQuote = React.createClass({


    render: function() {

      var forcesHeight = {
        height: "400px"
      }

      var characterImg = {
        background: "transparent no-repeat url('/images/img--characterBackground.jpg') top center",
        backgroundSize: "cover"
      }

      return (
        <div className="bg-dark-1 PersonaQuote" style={characterImg} >
          <div className="Wrap"></div>
          <div className="pbxxxl ptxxl">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-18 col-md-offset-3 animated fadeInUp">
                  <h1 className="txt-c em-low mvxxxl type-neutral-11">"Well, I gotta go. I think my judge is burning, fudge...My fudge is burning, judge...I mean, my mother wants me. I got to crochet a cake. Uh, goodbye!"</h1>
                </div>
              </div>
            </div>
          </div>
          {this.props.children}
          <hr className="mvn" />
        </div>
      );
    }
  });

  module.exports = _characterQuote;

}());


/** @jsx React.DOM */

(function () {
  'use strict';
  var _personaTitle = require('./_personaTitle.jsx');

  var _personaQuote = React.createClass({

    render: function() {
      return (
        <div className="bg-dark-1 PersonaQuote">
          <div className="Wrap"></div>
          <div className="pbxxxl ptxxl">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-18 col-md-offset-3">
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

  module.exports = _personaQuote;

}());


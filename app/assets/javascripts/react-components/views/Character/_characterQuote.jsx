/** @jsx React.DOM */

(function () {
  'use strict';

  var _characterQuote = React.createClass({


    render: function() {

      var forcesHeight = {
        height: "400px"
      }

      var imgUrl = this.props.banner;

      var characterImg = {
        background: "transparent no-repeat bottom center",
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: "cover"
      }

      return (
        <div className="bg-dark-1 PersonaQuote" style={characterImg} >
          <div className="Wrap"></div>
          <div className="pbxxxl ptxxl">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-18 col-md-offset-3 animated fadeInUp">
                  <h1 className="txt-c em-low mvxxxl type-neutral-11">{this.props.quote}</h1>
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


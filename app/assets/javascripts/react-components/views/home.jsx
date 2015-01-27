/** @jsx React.DOM */

(function () {
  'use strict';

  var Home = React.createClass({

    render: function() {
      return (
        <div className="bg-neutral-11">
          <div className="animated fadeInUp pvxxxl">
            <div className="container">
              <h1 className="title txt-c em-low mvn">Prototyping with React and Node</h1>
              <p className="h2 txt-c em-low mvn">You can do all sorts of fun things with this!</p>
            </div>
          </div>
          <hr className="mvn" />
        </div>
      );
    }
  });

  module.exports = Home;

}());


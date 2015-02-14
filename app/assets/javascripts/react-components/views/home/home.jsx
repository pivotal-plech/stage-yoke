/** @jsx React.DOM */

(function () {
  'use strict';

  var Home = React.createClass({

    render: function() {
      return (
        <div className="bg-neutral-11">
          <div className="animated fadeInUp pvxxxl">
            <div className="container">
              <h1 className="title txt-c em-low mvn">Stage Yoke</h1>
              <p className="h2 txt-c em-low mvn">Refine Your Characters. Like a Boss.</p>
            </div>
          </div>
          <hr className="mvn" />
        </div>
      );
    }
  });

  module.exports = Home;

}());

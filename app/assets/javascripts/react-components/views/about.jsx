/** @jsx React.DOM */

(function () {
  'use strict';

  var About = React.createClass({

    render: function() {
      return (
        <div className="bg-neutral-11">
          <div className="animated fadeInUp pvxxxl">
            <div className="container">
              <h1 className="title txt-c em-low mvn">This is an example about page</h1>
              <p className="h2 txt-c em-low mvn">Tell us what your about here.</p>
            </div>
          </div>
          <hr className="mvn" />
        </div>
      );
    }
  });

  module.exports = About;

}());

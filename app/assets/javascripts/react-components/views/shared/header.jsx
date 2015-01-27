/** @jsx React.DOM */

(function () {
  'use strict';

  var Link = window.ReactRouter.Link;

  var Header = React.createClass({

    render: function() {
      return (
      <div className='global-nav bg-dark-1 pal'>
        <div className="container">
          <div className="media">
            <div className="media-body">
              <Link to="/">
                <h1 className="type-neutral-11 mvn h4">
                  <span className="em-alt">Name of your App</span>
                <span className="h6 type-neutral-6 mll em-default">v0.1</span>
                </h1>
              </Link>
            </div>
            <div className="media-right type-neutral-11">
              <Link className="mrxl type-neutral-11" to="/">Home</Link>
              <Link className="type-neutral-11" to="/about">About</Link>
            </div>
          </div>
        </div>
      </div>
      );
    }
  });

  module.exports = Header;

}());

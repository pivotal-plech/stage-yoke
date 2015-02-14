/** @jsx React.DOM */

(function () {

  'use strict';

  var Router = window.ReactRouter;
  var Route = Router.Route;
  var NotFoundRoute = Router.NotFoundRoute;
  var DefaultRoute = Router.DefaultRoute;
  var Link = Router.Link;
  var RouteHandler = Router.RouteHandler;
  var Header = require('../shared/header.jsx');
  var Footer = require('../shared/footer.jsx');

  var App = React.createClass({

    render: function() {
      return (
      <div>
        <RouteHandler/>
      </div>
      );
    }
  });

  module.exports = App;

}());

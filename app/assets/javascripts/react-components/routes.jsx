/** @jsx React.DOM */
'use strict';

var Router = window.ReactRouter,
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    Link = Router.Link,
    RouteHandler = Router.RouteHandler,
    Application = require('./views/layouts/app.jsx'),
    Home = require('./views/home/index.jsx'),
    Persona = require('./views/persona/index.jsx');


module.exports = (
  <Route name="app" path="/" handler={Application}>
    <DefaultRoute handler={Home}/>
    <Route name="/persona" handler={Persona}/>
  </Route>
);

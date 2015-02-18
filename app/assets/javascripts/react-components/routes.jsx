/** @jsx React.DOM */
'use strict';

var Router = window.ReactRouter,
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    Link = Router.Link,
    RouteHandler = Router.RouteHandler,
    Application = require('./views/layouts/app.jsx'),
    Home = require('./views/Home/Home.jsx'),
    Character = require('./views/Character/Character.jsx'),
    CharacterCollection = require('./views/CharacterCollection/CharacterCollection.jsx');


module.exports = (
  <Route name="app" path="/" handler={Application}>
    <DefaultRoute handler={Home}/>
    <Route name="character" path="/characters/:slug" handler={Character}/>
    <Route name="/character-collection" handler={CharacterCollection}/>
  </Route>
);

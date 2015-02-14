//Routing stuff
var Router = window.ReactRouter;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var routes = require('./routes.jsx');

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});

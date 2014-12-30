var Hapi = require('hapi');
var Good = require('good');

var server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3000 });

server.route({
    method: 'GET',
    path: '/{params*}',
    handler: {
        directory: {
            path: './build/',
            listing: true,
            defaultExtension: 'html'
        }
    }
});

server.route({
    method: 'GET',
    path: '/fonts/{params*}',
    handler: {
        directory: {
            path: 'build/fonts/'
        }
    }
});

server.route({
    method: 'GET',
    path: '/pivotal-ui-react.js',
    handler: function (request, reply) {
        reply.file('build/pivotal-ui-react.js');
    }
});

server.route({
    method: 'GET',
    path: '/application.js',
    handler: function (request, reply) {
        reply.file('build/application.js');
    }
});

server.route({
    method: 'GET',
    path: '/pivotal-ui.css',
    handler: function (request, reply) {
        reply.file('build/pivotal-ui.css');
    }
});

server.route({
    method: 'GET',
    path: '/application.css',
    handler: function (request, reply) {
        reply.file('build/application.css');
    }
});

server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      args:[{ log: '*', response: '*' }]
    }]
  }
  }, function(err){
    if (err) {
      throw err;
    }

  server.start(function () {
      console.log('Server running at:', server.info.uri);
  });

});

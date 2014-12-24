var Hapi = require('hapi');
var Good = require('good');

var server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3000 });

server.route({
    method: 'GET',
    path: '/{params*}',
    handler: {
        directory: {
            path: 'app/views/',
            listing: true,
            defaultExtension: 'html'
        }
    }
});

server.route({
    method: 'GET',
    path: '/pivotal-ui.js',
    handler: function (request, reply) {
        reply.file('app/assets/javascripts/pivotal-ui.js');
    }
});

server.route({
    method: 'GET',
    path: '/main.js',
    handler: function (request, reply) {
        reply.file('app/assets/javascripts/main.js');
    }
});

server.route({
    method: 'GET',
    path: '/pivotal-ui.css',
    handler: function (request, reply) {
        reply.file('app/assets/stylesheets/pivotal-ui.css');
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

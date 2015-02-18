var Hapi = require('hapi');
var Good = require('good');
var mongoose = require('mongoose');

var Character = require('./app/api/1/models/character');

var server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3000 });
mongoose.connect(process.env.DBURI || 'mongodb://localhost/stageyoke');

server.views({
  engines: { jade: require('jade') },
  path: __dirname + '/app/views',
  compileOptions: {
    pretty: true,
    layoutPath: './app/views/layouts/',
    layout: false
  }
});

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply.view('index');
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
    path: '/images/{params*}',
    handler: {
        directory: {
            path: 'build/images/'
        }
    }
});

server.route({
    method: 'GET',
    path: '/react-router.js',
    handler: function (request, reply) {
        reply.file('build/react-router.js');
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

server.route({
    method: 'GET',
    path: '/api/1/character/{slug}',
    handler: function (request, reply) {
        Character.findOne({slug: request.params.slug}, function(err, character) {
            if (character) {
              reply({archetype: character.archetype});
            } else {
              return reply('The page was not found').code(404);
            }
        });
    }
});

server.route({
    method: 'POST',
    path: '/api/1/character',
    handler: function (request, reply) {
      var character =  new Character({
        slug: request.payload.slug,
        archetype: request.payload.archetype
      });
      character.save(function (err) {
        if (err) {
          return reply("Couldn't create.").code(421);
        }
        reply().code(200);
      });
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

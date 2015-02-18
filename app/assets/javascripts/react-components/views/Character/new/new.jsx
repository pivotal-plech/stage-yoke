/** @jsx React.DOM */

(function () {
  'use strict';

  var request = require('superagent');
  var Router = window.ReactRouter;

  var NewCharacter = React.createClass({

    mixins: [ Router.Navigation ],

    _onSubmit: function(event) {
      var slug = this.refs.slug.getDOMNode().value,
          archetype = this.refs.archetype.getDOMNode().value,
          self = this;
      request.post('/api/1/character')
        .send({
          archetype: archetype,
          slug: slug
        })
        .end(function(res) {
          self.transitionTo('/characters/' + slug);
        });
    },

    render: function() {
      return (
        <div className="paxxxl bg-neutral-11 panel panel-shadow-3">
          <div className="newCharacter">
            <div className="row">
              <div className="col-md-24">
                <form role="form" onSubmit={this._onSubmit}>
                  <div className="form-group">
                    <label>Character Archetype</label>
                    <input ref="archetype" type="text" className="form-control" placeholder="Enter Persona Archetype" />
                  </div>
                  <div className="form-group">
                    <label>Slug</label>
                    <input ref="slug" type="text" className="form-control" placeholder="Slugy Wug" />
                  </div>
                  <button type="submit" className="btn btn-highlight btn-lg">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  module.exports = NewCharacter;

}());

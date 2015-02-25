/** @jsx React.DOM */

(function () {
  'use strict';

  var request = require('superagent');
  var Router = window.ReactRouter;

  var NewCharacter = React.createClass({

    getInitialState: function(){
      return {
        error: null
      };
    },

    mixins: [ Router.Navigation ],

    _onSubmit: function(event) {
      var slug = this.refs.slug.getDOMNode().value,
          archetype = this.refs.archetype.getDOMNode().value,
          name = this.refs.name.getDOMNode().value,
          quote = this.refs.quote.getDOMNode().value,
          title = this.refs.title.getDOMNode().value,
          banner = this.refs.banner.getDOMNode().value,
          avatar = this.refs.avatar.getDOMNode().value,
          self = this;
      request.post('/api/1/character')
        .send({
          archetype: archetype,
          name: name,
          quote: quote,
          title: title,
          banner: banner,
          avatar: avatar,
          slug: slug
        })
        .end(function(res) {
          if(res.status === 422) {
            self.setState({error: res.body.message});
          } else {
            self.transitionTo('/characters/' + slug);
          }
        });
    },

    render: function() {
      return (
        <div className="paxxxl bg-neutral-11 panel panel-shadow-3">

          {this.state.error && (<div className="alert alert-error mtn mbxl">
            <div className="media">
              <div className="media-left">
                <i className="fa fa-exclamation-triangle"></i>
              </div>
              <div className="media-body em-high" id="error">
                {this.state.error}
              </div>
            </div>
          </div>)}
          <div className="newCharacter">
            <div className="row">
              <div className="col-md-24">
                <form role="form" onSubmit={this._onSubmit}>
                  <div className="form-group">
                    <label>Character Archetype</label>
                    <input ref="archetype" type="text" className="form-control" placeholder="Character Archetype" />
                  </div>
                  <div className="form-group">
                    <label>Character Banner</label>
                    <input ref="banner" type="text" className="form-control" placeholder="Character Banner URL" />
                  </div>
                  <div className="form-group">
                    <label>Character Avatar</label>
                    <input ref="avatar" type="text" className="form-control" placeholder="Character Avatar URL" />
                  </div>
                  <div className="form-group">
                    <label>Character Name</label>
                    <input ref="name" type="text" className="form-control" placeholder="Character Name" />
                  </div>
                  <div className="form-group">
                    <label>Character Title</label>
                    <input ref="title" type="text" className="form-control" placeholder="Character Title" />
                  </div>
                  <div className="form-group">
                    <label>Character Quote</label>
                    <textarea ref="quote" className="form-control" rows="3"></textarea>
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

/** @jsx React.DOM */

(function () {
  'use strict';
  var _characterArchetype = require('./_characterArchetype.jsx');
  var _characterQuote = require('./_characterQuote.jsx');
  var _characterName = require('./_characterName.jsx');
  var _characterImage = require('./_characterImage.jsx');
  var Forces = require('./forces/Forces.jsx');
  var Features = require('./features/Features.jsx');
  var request = require('superagent');
  var Router = window.ReactRouter;

  var Character = React.createClass({
    getInitialState: function() {
      return {
        archetype: 'Loading...'
      };
    },

    _updateCharacter: function() {
      var self = this,
          slug = this.getParams().slug;

      request.get('/api/1/character/' + slug, function(err, res) {
        if (res.status === 200) {
          self.setState({
            archetype: res.body.archetype,
            quote: res.body.quote,
            title: res.body.title,
            banner: res.body.banner,
            avatar: res.body.avatar,
            name: res.body.name
          });
        } else {
          self.setState({
            archetype: 'Error!'
          });
        }
      });
    },

    componentWillReceiveProps: function() {
      this._updateCharacter();
    },

    componentDidMount: function() {
      this._updateCharacter();
    },

    mixins: [Router.State],

    render: function() {
      return (
        <div className="character">
          <_characterArchetype archetype={this.state.archetype}></_characterArchetype>

          <_characterQuote quote={this.state.quote} banner={this.state.banner}>
            <_characterImage avatar={this.state.avatar}></_characterImage>
          </_characterQuote>

          <_characterName name={this.state.name} title={this.state.title}></_characterName>

          <hr className="mvn" />
          <Forces />
          <Features />
        </div>
      );
    }
  });

  module.exports = Character;

}());

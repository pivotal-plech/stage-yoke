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
            archetype: res.body.archetype
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

          <_characterQuote>
            <_characterImage></_characterImage>
          </_characterQuote>

          <_characterName></_characterName>

          <hr className="mvn" />
          <Forces />
          <Features />
        </div>
      );
    }
  });

  module.exports = Character;

}());

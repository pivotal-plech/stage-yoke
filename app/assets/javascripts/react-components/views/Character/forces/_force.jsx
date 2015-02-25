/** @jsx React.DOM */

(function () {
  'use strict';

  var request = require('superagent');
  var Router = window.ReactRouter;
  var _ = require('lodash');
  var _forceItem = require('./_forceItem.jsx');

  var _force = React.createClass({
    mixins: [Router.State],
    getInitialState: function() {
      return {
        forces: [
        ],
        userInput: ''
      }
    },

    componentWillReceiveProps: function(nextProps) {
      this.setState({forces: nextProps.forces});
    },

    _onSubmit: function() {
      var force = this.refs.force.getDOMNode().value,
          self = this;
      request.post('/api/1/characters/' + this.getParams().slug + '/forces')
        .send({
          force: force,
          type: this.props.type
        })
        .end(function(res) {
          if(res.status === 200) {
            return self.setState({
              forces: self.state.forces.concat([force]),
              userInput: ''
            })
          }
        });
    },

    _handleChange: function(e){
      this.setState({userInput: e.target.value})
    },

    render: function() {
      var forcesHeight = {
        minHeight: "600px"
      }

      var forces = _.map(this.state.forces, function(force) {
        return <_forceItem force={force} />
      });

      return (
        <div className="col-sm-12 force" style={forcesHeight}>
          <div className="force-inner">
            <h1 className="em-alt type-sm txt-c">{this.props.forceTitle}</h1>
            <hr className="mtn" />

            <div className="col-md-24">
              {forces}
            </div>
          </div>
          <form className="form-horizontal" role="form" onSubmit={this._onSubmit}>
            <div className="form-group">
              <div className="col-md-18">
                <input ref="force" type="text" onChange={this._handleChange} value={this.state.userInput} className="form-control" placeholder="Forces" />
              </div>
              <div className="col-md-6">
                <button type="submit" className="btn btn-highlight">Submit</button>
              </div>
            </div>
          </form>
          <hr />
        </div>
      );
    }
  });

  module.exports = _force;

}());



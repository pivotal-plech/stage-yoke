/** @jsx React.DOM */

(function () {
  'use strict';

  var _characterArchetype = React.createClass({

    render: function() {
      return (
          <div className="bg-brand-3">
            <div className="txt-c">
              <h1 className="mvn pvm type-neutral-11 h4 em-alt em-high">{this.props.archetype}</h1>
            </div>
          </div>
      );
    }
  });

  module.exports = _characterArchetype;
}());

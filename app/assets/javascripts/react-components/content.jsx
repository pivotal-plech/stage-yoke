/** @jsx React.DOM */

(function () {
  'use strict';

  var React = require('react');

  var Content = React.createClass({
    getInitialState: function() {
      return {};
    },
    componentDidMount: function () {},
    componentWillUnmount: function() {},

    render: function() {
      return (
      <div className='pivnet-hero'>
          <div className='container type-neutral-11 txt-c pvxxxl'>
            <div className='row'>
              <h1 className='mbn em-high'>Explore, download, and update Pivotal software and services</h1>
              <h2 className='mtn type-neutral-6 em-low'>Software designed with the enterprise in mind</h2>
            </div>
          </div>

          <hr className='mvn divider-1' />

          <div className='bg-shadow-2 pvxl'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-8'>
                  <button className='btn-lg btn-highlight-alt btn btn-block'>Join</button>
                  <p className='mbn mtl type-neutral-6 type-sm txt-c'>To download and evaluate all products and services</p>
                </div>
              </div>
            </div>
          </div>

      </div>
      );
    }
  });

  module.exports = Content;

}());

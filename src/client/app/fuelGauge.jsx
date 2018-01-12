/*
 credit to: Stefan Beutler, I copy his work from https://codepen.io/Sm1lEE/pen/IhbAy,  and heavily modify to suit my need. 
*/

import React from 'react';
import {render} from 'react-dom';
import Gauge from './gauge.jsx';

export default class FuelGauge extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fuel: 100,
      degree: 180
    };   
    this.testing();

  }

  // TODO:  this is for testing only.  real Fuel should be pass in upstream.     
  testing () {
  	// mocking vehicle using up fuel
    setInterval(function(){
        this.setFuel(this.state.fuel - Math.random()*5);
      }.bind(this), 8000); 
  };  

  render () {
    return (
      <Gauge 
        value={"E Fuel F"} 
        degree={this.state.degree}
      ></Gauge>
    );
  }

  setFuel (fuel) {
  	this.setState({
  		fuel: Math.round(fuel), 
  		degree: Math.round(fuel*180/100)
  	});
  }

}


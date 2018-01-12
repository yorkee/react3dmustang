/*
 credit to: Stefan Beutler, I copy his work from https://codepen.io/Sm1lEE/pen/IhbAy,  and heavily modify to suit my need. 
*/

import React from 'react';
import {render} from 'react-dom';
import Gauge from './gauge.jsx';

export default class Speedo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      speed: 0,
      degree: 0
    };   
    this.testing();

  }

    // TODO:  this is for testing only.  real speed should be pass in upstream.     
    testing () {
      let speedUp = true;
      let speedUpDownCount = 0;

      setInterval(function(){
        let speed = this.state.speed;
        if (speedUp){
          speed += Math.random() * 5;
        } else {
          speed -= Math.random() * 5;
        }

        // if it ever get minus speed up again.  
        if (speed < 0){
          speed = 0;
          speedUp = true;
          speedUpDownCount = 0
        } else if (speed >115){
          speedUp = false;
          speedUpDownCount = 0;
        }

        this.setSpeed(speed);

        // make it less random, more consistant of either increment or decrement speed so it look a bit more realastic.
        if (Math.random()>0.5){
          speedUpDownCount++;
        }
        if (speedUpDownCount >8){
          speedUpDownCount = 0;
          speedUp = !speedUp;
        }
      }.bind(this), 2000); 
    };  

  render () {
    return (
      <Gauge 
        value={this.state.speed+"MPH"} 
        degree={this.state.degree}
      ></Gauge>
    );
  }

  setSpeed (speed) {
    // although the test code already do the check, its a good idea to check minus speed in 'rea' code
    speed = (speed > 0) ? speed: 0;
  	this.setState({
  		speed: Math.round(speed), 
  		degree: Math.round(speed*3/2)
  	});
  }

}


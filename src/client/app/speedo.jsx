/*
 credit to: Stefan Beutler, I copy his work from https://codepen.io/Sm1lEE/pen/IhbAy,  and heavily modify to suit my need. 
*/

import React from 'react';
import {render} from 'react-dom';
import './speedo.css';

export default class Speedo extends React.Component {

  constructor(props) {
    super(props);
	this.state = {
      speed: "0MPH",
      degree: 0
    };   

	//TODO:  this is for testing only.  real speed need to be passed in.   	
	setInterval(function(){
		console.log("setting speed");
		this.setSpeed(Math.random()*100);
	}.bind(this), 5000); 

  }

  render () {


    const styles = { 
        transform: `rotate(${this.state.degree}deg)` 
    };
    return (
		<div id="speedometer" data-value={this.state.speed}>
  			<span id="speedoNeedle" style={styles}></span>
		</div>
    );
  }

  setSpeed (speed) {
  	this.setState({
  		speed: Math.round(speed)+"MPH", 
  		degree: Math.round(speed*3/2)
  	});
  }

}


import React from 'react';
import {render} from 'react-dom';
import './temperatureGauge.css';

/*
This gauge contributed by Tommy Creenan : https://codepen.io/TommyCreenan/pen/pCslj
heavily modified and being used in reactjs 
*/

export default class TemperatureGauge extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 90
    };   
    this.testing();
  }

  testing () {
  	// mocking vehicle using up fuel
  	let isUp = false;
    setInterval(function(){
    	if (isUp){
        	this.setTemperature(this.state.value + Math.random()*5);
        } else {
        	this.setTemperature(this.state.value - Math.random()*5);
        }
      }.bind(this), 12000); 
  }; 

  setTemperature (value) {
  	this.setState({
  		value: Math.round(value)
  	});
  }

  render () {
  	let tempStyle = {height: this.state.value*.9 + '%'};
    return (
		<div className="donation-meter">
		  <span className="glass">
		      <span className="amount" style={tempStyle}></span>
		  </span>
		  <div className="bulb">
		      <span className="red-circle">
				<span id="temp">{this.state.value}F</span>
		      </span>
		      <span className="filler">		          
		      </span>
		      
		  </div>
		</div>
      // <div className='gauge'>
      //   <p> 90 F</p>
      // </div>
    );
  }
}





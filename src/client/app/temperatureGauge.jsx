import React from 'react';
import {render} from 'react-dom';
import './temperatureGauge.css';

/*
This gauge contributed by Tommy Creenan : https://codepen.io/TommyCreenan/pen/pCslj
heavily modified and being used in reactjs 
*/

export default class TemperatureGauge extends React.Component {
  render () {
    return (
		<div className="donation-meter">
		  <span className="glass">
		      <span className="amount" style={{height: '30%'}}></span>
		  </span>
		  <div className="bulb">
		      <span className="red-circle">
				<span id="temp">90F</span>
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





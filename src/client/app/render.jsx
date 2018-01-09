import React from 'react';
import {render} from 'react-dom';
import Speedo from './speedo.jsx';
import FuelGauge from './fuelGauge.jsx';

	//TODO:  this is for testing only.  real speed need to be passed in.   	
	setTimeout(function(){
		Speedo.setSpeed(Math.random()*100);
	}.bind(this), 500); 

render(<Speedo/>, document.getElementById('speedo'));
render(<FuelGauge/>, document.getElementById('fuelGauge'));
import React from 'react';
import {render} from 'react-dom';
import Speedo from './speedo.jsx';
import FuelGauge from './fuelGauge.jsx';
import TemperatureGauge from './TemperatureGauge.jsx';


render(<Speedo/>, document.getElementById('speedo'));
render(<FuelGauge/>, document.getElementById('fuelGauge'));
render(<TemperatureGauge/>, document.getElementById('temperatureGauge'));
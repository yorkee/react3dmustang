import React from 'react';
import {render} from 'react-dom';
import Speedo from './speedo.jsx';
import FuelGauge from './fuelGauge.jsx';
import TemperatureGauge from './TemperatureGauge.jsx';
import TirePressure from './TirePressure.jsx';


render(<Speedo/>, document.getElementById('speedo'));
render(<FuelGauge/>, document.getElementById('fuelGauge'));
render(<TemperatureGauge/>, document.getElementById('temperatureGauge'));
// TODO:  currently all 4 tire using the smae tag.  need to distinguish them
render(<TirePressure/>, document.getElementById('tirePressureLF'));
render(<TirePressure/>, document.getElementById('tirePressureRF'));
render(<TirePressure/>, document.getElementById('tirePressureLR'));
render(<TirePressure/>, document.getElementById('tirePressureRR'));
import React from 'react';
import {render} from 'react-dom';
import './gauge.css';

export default class TemperatureGauge extends React.Component {
  render () {
    return (
      <div className='gauge'>
        <p> 90 F</p>
      </div>
    );
  }
}

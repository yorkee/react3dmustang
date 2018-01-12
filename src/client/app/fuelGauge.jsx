import React from 'react';
import {render} from 'react-dom';
import './gauge.css'

export default class FuelGauge extends React.Component {
  render () {
    return (
      <div className='gauge'>
        <p> Full | Empty</p>
      </div>
    );
  }
}

/*
 credit to: Stefan Beutler, I copy his work from https://codepen.io/Sm1lEE/pen/IhbAy,  and heavily modify to suit my need. 
*/

import React from 'react';
import {render} from 'react-dom';
import './tirePressure.css';

export default class TirePressure extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 35
    }
  }

  render () {
    return (
		<div className="tirePressure" >
      {this.state.value} PSI
		</div>
    );
  }
}


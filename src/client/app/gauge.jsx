/*
 credit to: Stefan Beutler, I copy his work from https://codepen.io/Sm1lEE/pen/IhbAy,  and heavily modify to suit my need. 
*/

import React from 'react';
import {render} from 'react-dom';
import './gauge.css';

export default class Gauge extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const styles = { 
        transform: `rotate(${this.props.degree}deg)` 
    };
    return (
		<div className="gaugemeter" data-value={this.props.value}>
  			<span className="gaugeNeedle" style={styles}></span>
		</div>
    );
  }
}


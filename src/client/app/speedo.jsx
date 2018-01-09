import React from 'react';
import {render} from 'react-dom';
import './speedo.css';

export default class Speedo extends React.Component {

  render () {
    return (
		<div id="speedometer" data-value="0">
  			<span id="speedoNeedle"></span>
		</div>
    );
  }
}


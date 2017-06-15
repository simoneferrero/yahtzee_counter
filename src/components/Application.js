import React, { Component } from 'react';
import glamorous, { Div } from 'glamorous';

import DiceRow from './DiceRow';

export default class Application extends Component {

  state = {
  };

  handleClick = (e) => {
  }

  render = () => {
    return (
      <DiceRow
        section={ 2 }
        row={ 1 }
      />
    );
  }
}

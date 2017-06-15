import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous, { Div } from 'glamorous';

import Die from './Die';
import Slider from './Slider';

export default class DiceRow extends Component {

  state = {
  }

  static propTypes = {
    section: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
  }

  handleClick = () => {
  }

  render = () => {

    const { section, row } = this.props;

    var diceRow = [];
    const dieSize = 150;

    if (section === 1) {
      for (var i = 0; i <= 5; i++) {
        diceRow.push(
          <Die
            key={ i }
            face={ i === 0 ? 0 : row }
            size={ dieSize }
          />
        )
      }
    } else if (section === 2) {
      if (row >= 2 && row < 6) {
        for (var i = 0; i <= 7; i += 7) {
          diceRow.push(
            <Die
              key={ i }
              face={ i }
              size={ dieSize }
            />
          )
        }
      } else {
        diceRow.push(
          <Slider
            key={ row }
          />
        );
      }
    }

    return (
      <Div
        height={ '100vh' }
        display={ 'flex' }
        justifyContent={ 'center' }
        alignItems={ 'center' }
      >
        { diceRow }
      </Div>
    );
  }
}

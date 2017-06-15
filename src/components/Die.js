import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous, { Div, Span } from 'glamorous';

import DieDot from './DieDot';

export default class Die extends Component {

  state = {
    clicked: false,
  }

  static propTypes = {
    face: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
  }

  handleClick = () => {

    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render = () => {

    const { face, size } = this.props;

    const faces = [
      [],
      [5],
      [1, 9],
      [1, 5, 9],
      [1, 3, 7, 9],
      [1, 3, 5, 7, 9],
      [1, 2, 3, 7, 8, 9],
    ];

    let dieContent;

    if (face < 1) {
      dieContent = (
        <Span
          fontSize={ size / 1.2 }
          className="glyphicon glyphicon-remove"
        ></Span>
      );
    } else if (face === 7) {
      dieContent = (
        <Span
          fontSize={ size / 1.2 }
          className="glyphicon glyphicon-ok"
        ></Span>
      );
    } else if (face === 8) {
      dieContent = (
        <Span
          fontSize={ size / 1.2 }
          fontWeight={ 900 }
        >Y</Span>
      );
    } else {
      dieContent = faces[face].map(dot => {
          return (
            <DieDot
              key={ dot }
              position={ dot }
              size={ size / 5 }
            ></DieDot>
          );
      });
    }

    return (
      <Div
        display={ 'flex' }
        justifyContent={ 'center ' }
        alignItems={ 'center' }
        position={ 'relative' }
        width={ size }
        height={ size }
        border={ '1px solid black' }
        borderRadius={ size / 8 }
        userSelect={ 'none' }
      >
        { dieContent }
        <Div
          position={ 'absolute' }
          width={ size }
          height={ size }
          borderRadius={ size / 8 }
          cursor={ 'pointer' }
          backgroundColor={ 'red' }
          opacity={ this.state.clicked ? 0.6 : 0 }

          onClick={ () => this.handleClick() }
        >
        </Div>
      </Div>
    );
  }
}

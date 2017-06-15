import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous, { Div } from 'glamorous';

export default class DieDot extends Component {

  static propTypes = {
    position: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
  }

  styles = () => {
    const { size } = this.props;

    const vertical = [
      {
        top: 0,
      },
      {
        top: '50%',
        marginTop: -(size / 2),
      },
      {
        bottom: 0,
      },
    ];

    const horizontal = [
      {
        left: 0,
      },
      {
        left: '50%',
        marginLeft: -(size / 2),
      },
      {
        right: 0,
      },
    ];

    const styles = [
      [],
    ];

    vertical.forEach(v => {
      horizontal.forEach(h => {
        styles.push({
          ...v,
          ...h,
        });
      });
    });

    return styles;
  }

  render = () => {

    const { position, size } = this.props;
    const styles = this.styles();

    return (
      <Div
        position={ 'absolute' }
        width={ size }
        height={ size }
        margin={ size / 2 }
        backgroundColor={ 'black' }
        borderRadius={ size }
        { ...styles[position] }
      >
      </Div>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous, { Div, Input } from 'glamorous';

export default class Slider extends Component {

  state = {
  }

  handleClick = () => {
  }

  render = () => {

    return (
      <Div>
        <Input
          type={ 'range' }
          defaultValue={ -1 }
          min={ -1 }
          max={ 30 }
        />
      </Div>
    );
  }
}

import React, { Component } from 'react';

import store from '../state/store';
import {
  ClipMoved
} from '../state/actions';

const FILE_FORMATS = {
  GIF: 'gif',
  JPG: 'jpg'
}

export default class Clip extends Component {
  state = { isHovered: false };

  moveClip = () => {
    store.dispatch(ClipMoved(this.props.id, "1"));
  }

  onMouseEnter = () => {
    this.setState({
      isHovered: true
    });
  };

  onMouseLeave = () => {
    this.setState({
      isHovered: false
    });
  };

  render() {
    const {
      id
    } = this.props;
    const {
      isHovered
    } = this.state;
    const imgName = `lemon_step_${id}_master`;
    const fileFormat = isHovered ? FILE_FORMATS.GIF : FILE_FORMATS.JPG;
    return (
      <div className='clip'>
        <img
          onClick={this.moveClip}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          src={require(`../assets/${imgName}.${fileFormat}`)} />
      </div>
    );
  }
}

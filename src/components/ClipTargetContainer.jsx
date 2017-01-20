
import React, { Component } from 'react';

import Clip from './Clip';

export default class ClipTargetContainer extends Component {
  render() {
    const {
      clipId,
      id
    } = this.props;
    return (
      <div className='clip-target-container'>
        {
          clipId ?
            <Clip id={clipId}></Clip> :
            null
        }
      </div>
    );
  }
}

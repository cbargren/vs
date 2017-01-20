import React, { Component } from 'react';

import Clip from './Clip';

export default class ClipContainer extends Component {
  render() {
    const {
      clipOrdered,
      id
    } = this.props;

    return (
      <div className='clip-container'>
        {
          clipOrdered ? null : <Clip id={id}></Clip>
        }
      </div>
    );
  }
}

import React, { Component } from 'react';

import Clip from './Clip';

export default class ThumbnailContainer extends Component {
  render() {
    const {
      iconVisible,
      imgName
    } = this.props;

    return (
      <div className='thumbnail-container'>
        {
          iconVisible ? <Clip imgName={imgName} ></Clip> : null
        }
      </div>
    );
  }
}

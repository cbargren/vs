import _ from 'lodash';
import classnames from 'classnames';
import React, { Component } from 'react';

import { getAllClipsAreCorrect } from '../state/selectors';

export default class Container extends Component {
  render () {
    const {
      clipsById
    } = this.props;

    const allClipsAreCorrect = getAllClipsAreCorrect(clipsById);
    const videoAttributes = allClipsAreCorrect ? { autoPlay: true, controls: true } : {};
    const overlayClassnames = classnames(
      'video-overlay',
      {
        hidden: allClipsAreCorrect
      }
    );

    return (
      <div className='video'>
        <div className={overlayClassnames}></div>
        <video {...videoAttributes} src={require('../assets/bev_Fizzio_Lemon_Ale_MG_360_v01.mp4')}></video>
      </div>
    );
  }
}

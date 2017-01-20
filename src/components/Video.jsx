import _ from 'lodash';
import React, { Component } from 'react';

import Overlay from './Overlay';
import { getAllClipsAreCorrect } from '../state/selectors';

export default class Container extends Component {
  render () {
    const {
      clipsById
    } = this.props;

    const allClipsAreCorrect = getAllClipsAreCorrect(clipsById);
    const videoAttributes = allClipsAreCorrect ? { autoPlay: true, controls: true } : {};

    return (
      <div className='video'>
        <Overlay isShown={!allClipsAreCorrect} />
        <video {...videoAttributes} src={require('../assets/bev_Fizzio_Lemon_Ale_MG_360_v01.mp4')}></video>
      </div>
    );
  }
}

import _ from 'lodash';
import React, { Component } from 'react';

import ThumbnailGutter from './ThumbnailGutter';

export default class Container extends Component {
  render () {
    const clips = [
      'lemon_step_1_master',
      'lemon_step_2_master',
      'lemon_step_3_master',
      'lemon_step_4_master',
      'lemon_step_5_master',
      'lemon_step_6_master',
      'lemon_step_7_master'
    ];
    const unassignedClips = _.map(clips, imgName => ({ iconVisible: true, imgName }));

    return (
      <div className='container'>
        <ThumbnailGutter unassignedClips={unassignedClips} />
        <div className='main'>
          <div className='video'>

          </div>
          <div className='thumbnail-targets'>

          </div>
        </div>
      </div>
    );
  }
}

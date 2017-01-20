import _ from 'lodash';
import React, { Component } from 'react';

import ThumbnailContainer from './ThumbnailContainer';

export default class ThumbnailGutter extends Component {
  render() {
    const {
      unassignedClips
    } = this.props;

    const clipContainers = _.map(unassignedClips, (clip) => <ThumbnailContainer {...clip} />);
    return (
      <div className='thumbnail-gutter'>
        {clipContainers}
      </div>
    );
  }
}

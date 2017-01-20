import _ from 'lodash';
import React, { Component } from 'react';

import { getAllClipsOrdered } from '../state/selectors';
import ClipTargetContainer from './ClipTargetContainer';

export default class ClipTargets extends Component {
  render() {
    const {
      clipsById
    } = this.props;
    const allClipsOrdered = getAllClipsOrdered(clipsById);

    const clipTargets = _(_.range(1, _.size(clipsById) + 1))
      .map(id => <ClipTargetContainer clipId={_.findKey(clipsById, ['orderedLocation', `${id}`])} showScore={allClipsOrdered} id={`${id}`} />)
      .value();
    return (
      <div className='clip-targets'>
        {clipTargets}
      </div>
    );
  }
}

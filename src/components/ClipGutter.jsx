import _ from 'lodash';
import React, { Component } from 'react';

import { getAllClipsAreCorrect } from '../state/selectors';
import ClipContainer from './ClipContainer';
import Overlay from './Overlay';

export default class ClipGutter extends Component {
  render() {
    const {
      clipsById
    } = this.props;

    const allClipsAreCorrect = getAllClipsAreCorrect(clipsById);
    const clipsByDisorderedLocation = _(clipsById)
      .map((value, id) => ({ id, ...value }))
      .sortBy('disorderedLocation')
      .value();
    const clipContainers = _.map(clipsByDisorderedLocation, ({ id, orderedLocation }) => {
      return <ClipContainer id={id} clipOrdered={!!orderedLocation} />
    });
    return (
      <div className='clip-gutter z-depth-1'>
        <Overlay isShown={allClipsAreCorrect} />
        {clipContainers}
      </div>
    );
  }
}

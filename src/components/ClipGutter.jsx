import _ from 'lodash';
import React, { Component } from 'react';

import ClipContainer from './ClipContainer';

export default class ClipGutter extends Component {
  render() {
    const {
      clipsById
    } = this.props;

    const clipsByDisorderedLocation = _(clipsById)
      .map((value, id) => ({ id, ...value }))
      .sortBy('disorderedLocation')
      .value();
    const clipContainers = _.map(clipsByDisorderedLocation, ({ id, clipOrdered }) => {
      return <ClipContainer id={id} clipOrdered={clipOrdered} />
    });
    return (
      <div className='clip-gutter'>
        {clipContainers}
      </div>
    );
  }
}

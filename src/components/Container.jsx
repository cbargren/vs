import _ from 'lodash';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ClipGutter from './ClipGutter';
import ClipTargets from './ClipTargets';
import Video from './Video';

class Container extends Component {
  render () {
    return (
      <div className='container'>
        <ClipGutter clipsById={this.props.clipsById} />
        <Video clipsById={this.props.clipsById} />
        <ClipTargets clipsById={this.props.clipsById} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);

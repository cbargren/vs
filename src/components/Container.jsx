import _ from 'lodash';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ClipGutter from './ClipGutter';
import ClipTargets from './ClipTargets';

class Container extends Component {
  render () {
    return (
      <div className='container'>
        <ClipGutter clipsById={this.props.clipsById} />
        <div className='main'>
          <div className='video'>

          </div>
          <ClipTargets clipsById={this.props.clipsById} />
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);

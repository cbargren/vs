import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

import Clip from './Clip';

const clipDropTarget = {
  drop(props) {
    return {
      id: props.id
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class ClipTargetContainer extends Component {
  render() {
    const {
      clipId,
      id,
      connectDropTarget,
      isOver
    } = this.props;

    return connectDropTarget(
      <div className='clip-target-container'>
        {
          clipId ?
            <Clip id={clipId}></Clip> :
            null
        }
      </div>
    );
  }
}

export default DropTarget('Clip', clipDropTarget, collect)(ClipTargetContainer);

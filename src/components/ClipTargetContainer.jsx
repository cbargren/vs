import classnames from 'classnames';
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
      isOver,
      showScore
    } = this.props;
    const isCorrect = id === clipId;
    const classes = classnames(
      'clip-target-container',
      {
        'z-depth-3': isOver,
        'is-over': isOver,
        'correct': showScore && isCorrect,
        'incorrect': showScore && !isCorrect
      }
    )

    return connectDropTarget(
      <div className={classes}>
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

import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

import store from '../state/store';
import {
  ClipMoved
} from '../state/actions';

const FILE_FORMATS = {
  GIF: 'gif',
  JPG: 'jpg'
}

const clipSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  },
  endDrag(props, monitor) {
    const dropTarget = monitor.getDropResult();
    if (!dropTarget) {
      return;
    }
    store.dispatch(ClipMoved(props.id, dropTarget.id));
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Clip extends Component {
  state = { isHovered: false };

  moveClip = () => {
    store.dispatch(ClipMoved(this.props.id, "1"));
  }

  onMouseEnter = () => {
    this.setState({
      isHovered: true
    });
  };

  onMouseLeave = () => {
    this.setState({
      isHovered: false
    });
  };

  render() {
    const {
      connectDragSource,
      isDragging,
      id
    } = this.props;
    const {
      isHovered
    } = this.state;
    const imgName = `lemon_step_${id}_master`;
    const fileFormat = isHovered ? FILE_FORMATS.GIF : FILE_FORMATS.JPG;
    return connectDragSource(
      <div className='clip'>
        <img
          onClick={this.moveClip}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          src={require(`../assets/${imgName}.${fileFormat}`)} />
      </div>
    );
  };
}

export default DragSource('Clip', clipSource, collect)(Clip);

import classnames from 'classnames';
import React, { Component } from 'react';

export default class Overlay extends Component {
  render() {
    const {
      isShown
    } = this.props;
    const overlayClassnames = classnames(
      'overlay',
      {
        hidden: !isShown
      }
    );

    return (
      <div className={overlayClassnames}></div>
    );
  }
}

import _ from 'lodash';
import React, { Component } from 'react';

import ClipGutter from './ClipGutter';
import ClipTargets from './ClipTargets';

export default class Container extends Component {
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

import React, { Component } from 'react';

export default class Container extends Component {
  render () {
    const {
      clipsById
    } = this.props;
    return (
      <div className='video'>
        <video src='../assets/bev_Fizzio_Lemon_Ale_MG_360_v01.mp4'></video>
      </div>
    );
  }
}

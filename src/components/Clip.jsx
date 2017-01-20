import React, { Component } from 'react';

export default class Clip extends Component {
  render() {
    const {
      imgName
    } = this.props;
    return (
      <div className='clip'>
        <img src={require(`../assets/${imgName}.jpg`)} />
      </div>
    );
  }
}

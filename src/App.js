import React, { Component } from 'react';

import store from './state/store';
import { ClipsInit } from './state/actions';
import './App.css';
import Container from './components/Container';

store.dispatch(ClipsInit());
class App extends Component {
  state = store.getState();

  constructor(props) {
    super(props);
    store.subscribe(() => this.setState(store.getState()));
  }

  render() {
    return (
      <Container {...this.state}></Container>
    );
  }
}

export default App;

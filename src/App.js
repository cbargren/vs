import React, { Component } from 'react';

import { ClipsInit, StatusReported } from './state/actions';
import store from './state/store';
import { getAllClipsAreCorrect } from './state/selectors';
import './App.css';
import Container from './components/Container';
import LMS from './LMSMock';

store.dispatch(ClipsInit());
class App extends Component {
  state = store.getState();

  constructor(props) {
    super(props);
    store.subscribe(() => this.updateState());
  }

  updateState() {
    const state = store.getState();
    const allClipsAreCorrect = getAllClipsAreCorrect(state.clipsById);

    if (allClipsAreCorrect && !state.statusReported) {
      LMS.setStatus('complete');
      store.dispatch(StatusReported(true));
    }

    this.setState(state);
  }

  render() {
    return (
      <Container {...this.state}></Container>
    );
  }
}

export default App;

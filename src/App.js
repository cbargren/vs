import React, { Component } from 'react';

import { ClipsInit, StatusReported } from './state/actions';
import store from './state/store';
import { getAllClipsAreCorrect, getAllClipsOrdered, getNumberOfClips, getNumberOfCorrectlyOrderedClips } from './state/selectors';
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
    const numberOfClips = getNumberOfClips(state.clipsById);
    const numberOfCorrectlyOrderedClips = getNumberOfCorrectlyOrderedClips(state.clipsById);
    const allClipsAreCorrect = getAllClipsAreCorrect(state.clipsById);
    const allClipsOrdered = getAllClipsOrdered(state.clipsById);

    if (allClipsAreCorrect && !state.statusReported) {
      LMS.setStatus('complete');
      LMS.setScore(100);
      store.dispatch(StatusReported(true));
    }
    else if (allClipsOrdered) {
      LMS.setScore(+(100 * numberOfCorrectlyOrderedClips / numberOfClips).toFixed(2));
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

import _ from 'lodash';
import { createStore } from 'redux';

import {
  CLIPS_INIT,
  CLIP_MOVED,
  CLIP_UNORDERED
} from './actions';

const initState = () => ({
  clipsById: {
    '1': {
      disorderedLocation: 1,
      orderedLocation: null
    }
  }
});

const reducer = (state, message) => {
  if (!state) {
    return reducer(initState(), message);
  }
  switch (message.type) {
    case CLIPS_INIT: {
      return {
        ...state,
        clipsById: message.clipsById
      };
    }
    case CLIP_MOVED: {
      const {
        id,
        movedTo
      } = message;
      const prevOrderedLocation = state.clipsById[id].orderedLocation;
      const displacedClipId = _.findKey(state.clipsById, clip => clip.orderedLocation === movedTo);

      return {
        ...state,
        clipsById: {
          ...state.clipsById,
          [id]: {
            ...state.clipsById[id],
            orderedLocation: movedTo
          },
          ...displacedClipId && {
            [displacedClipId]: {
              ...state.clipsById[displacedClipId],
              orderedLocation: prevOrderedLocation
            }
          }
        }
      };
    }
    case CLIP_UNORDERED: {
      const {
        id
      } = message;

      return {
        ...state,
        clipsById: {
          ...state.clipsById,
          [id]: {
            ...state.clipsById[id],
            orderedLocation: null
          }
        }
      };
    }
    default: {
      return state;}
  }
};

export default createStore(reducer);

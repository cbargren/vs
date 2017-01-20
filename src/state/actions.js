import _ from 'lodash';

export const CLIPS_INIT = 'CLIPS_INIT';
export const CLIP_MOVED = 'CLIP_MOVED';
export const CLIP_UNORDERED = 'CLIP_UNORDERED';

const clipCount = 7;

export const ClipsInit = () => {
  const clipIds = _.range(1, clipCount + 1);
  const shuffledOrder = _.shuffle(clipIds);
  return {
    type: CLIPS_INIT,
    clipsById: _(clipIds).mapKeys(id => id).mapValues(id => ({
      disorderedLocation: shuffledOrder[id],
      orderedLocation: null
    })).value()
  };
};

export const ClipMoved = (id, movedTo) => ({
  type: CLIP_MOVED,
  id,
  movedTo
});

export const ClipUnordered = (id) => ({
  type: CLIP_UNORDERED,
  id
});

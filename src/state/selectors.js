import _ from 'lodash';

export const getNumberOfClips = clipsById => _.size(clipsById);

export const getNumberOfCorrectlyOrderedClips = clipsById => _(clipsById).filter(({ orderedLocation }, id) => id === orderedLocation).size();

export const getAllClipsAreCorrect = clipsById => !_.some(clipsById, ({ orderedLocation }, id) => id !== orderedLocation);

export const getAllClipsOrdered = clipsById => !_.some(clipsById, ({ orderedLocation }) => !orderedLocation);

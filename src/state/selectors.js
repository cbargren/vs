import _ from 'lodash';

export const getAllClipsAreCorrect = clipsById => !_.some(clipsById, ({ orderedLocation }, id) => id !== orderedLocation);

export const getAllClipsOrdered = clipsById => !_.some(clipsById, ({ orderedLocation }) => !orderedLocation);

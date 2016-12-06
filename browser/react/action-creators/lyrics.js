import { SET_LYRICS } from '../constants';

// action creator
export const setLyrics = (text) => {
  return {
    type: SET_LYRICS,
    lyric: text
  };
};

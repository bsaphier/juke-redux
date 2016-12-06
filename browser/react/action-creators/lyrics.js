import { SET_LYRICS } from '../constants';
import axios from 'axios';

// action creator
const setLyrics = (text) => {
  return {
    type: SET_LYRICS,
    lyric: text
  };
};

//async action creator using thunkMiddleware
export const fetchLyrics =  (artist, song) => {
  return function (dispatch, getState) {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      });
  };
};

import { SET_LYRICS } from '../constants';

const initialState = { text: '' };

// our reducer
export default function lyricsReducer (state = initialState, action) {
  switch (action.type) {
    case SET_LYRICS:
      return Object.assign({}, state, { text: action.lyric });
    default: return state;
  }
}

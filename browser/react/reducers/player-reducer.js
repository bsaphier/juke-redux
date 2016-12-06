import {
  START_PLAYING,
  STOP_PLAYING,
  SET_CURRENT_SONG,
  SET_LIST
} from '../constants';

export const initialPlayerState = {
  currentSong: {},
  currentSongList: [],
  isPlaying: false,
  progress: 0
};

export default function playerReducer(state = initialPlayerState, action) {

  const newState = Object.assign({}, state);
  switch (action.type) {
    case START_PLAYING:
      newState.isPlaying = true;
      break;
    case STOP_PLAYING:
      newState.isPlaying = false;
      break;
    default:
      return state;
  }

  return newState;

}

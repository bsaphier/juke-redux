import React, { Component } from 'react';
import Lyrics from '../components/Lyrics';
import axios from 'axios';

import store from '../store';
import { setLyrics, fetchLyrics } from '../action-creators/lyrics';

export default class LyricsContainer extends Component {
  constructor () {
    super();
    this.state = Object.assign({
      artistQuery: '',
      songQuery: '',
    }, store.getState());

    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // subscribe to store
  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

// we added async action creator using thunkMiddleware
  handleSubmit() {
    console.log('STORE: ', store);
    if (this.state.artistQuery && this.state.songQuery) {
      store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
    }
  }
  // axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
  //    .then(res => {
  //      return res.data.lyric;
  //    })
  //    .then(foundLyrics => {
  //      store.dispatch(setLyrics(foundLyrics));
  //    });

  render () {
    return (
      <Lyrics
        text={this.state.text}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        artistQuery={this.artistQuery}
        songQuery={this.songQuery}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

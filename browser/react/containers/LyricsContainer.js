import React, { Component } from 'react';
import Lyrics from '../components/Lyrics';
import axios from 'axios';

import store from '../store';
import { setLyrics } from '../action-creators/lyrics';

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

  handleSubmit() {
    if (this.state.artistQuery && this.state.songQuery) {
      axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
        .then(response => {
          console.log(response);
          const setLyricsAction = setLyrics(response.data.lyric);
          store.dispatch(setLyricsAction);
        });
        //  .then(res => {
        //    console.log(res);
        //    return res.data.lyric;
        //  })
        //  .then(foundLyrics => {
        //    console.log(foundLyrics);
        //    store.dispatch(setLyrics(foundLyrics));
        //  });
    }
  }

  render () {
    return (
      <Lyrics
        test={this.state.text}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        artistQuery={this.artistQuery}
        songQuery={this.songQuery}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

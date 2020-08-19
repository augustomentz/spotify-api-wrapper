/* global fetch */
import search from './search';
import album from './album';
import artist from './artist';
import track from './track';
import playlist from './playlist';

import API_URL from './config';
import toJSON from './utils';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;

    this.search = search.bind(this)();
    this.album = album.bind(this)();
    this.artist = artist.bind(this)();
    this.track = track.bind(this)();
    this.playlist = playlist.bind(this)();
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    return fetch(url, headers).then(toJSON);
  }
}

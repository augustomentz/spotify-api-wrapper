import {
  describe, it, beforeEach, afterEach,
} from 'mocha';
import chai, { expect } from 'chai';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Playlist', () => {
  let stubedFetch;
  const spotify = new SpotifyWrapper({
    token: 'foo',
  });

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ playlist: 'name' }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('Should exist the {getPlaylist} method', () => {
      expect(spotify.playlist.getPlaylist).to.exist;
    });

    it('Should exist the {getPlaylistTracks} method', () => {
      expect(spotify.playlist.getPlaylistTracks).to.exist;
    });
  });

  describe('getPlaylist', () => {
    it('Should call fetch method', () => {
      spotify.playlist.getPlaylist();
      expect(stubedFetch).to.be.calledOnce;
    });

    it('Should call fetch with correct url', () => {
      spotify.playlist.getPlaylist('37i9dQZF1DXcmgCctFhSfI');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/playlists/37i9dQZF1DXcmgCctFhSfI');

      spotify.playlist.getPlaylist('2Jw4Lrfjnyv2QsDoBgnrAC');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/playlists/37i9dQZF1DXcmgCctFhSfI');
    });

    it('Should return the correct data from Promise', () => {
      const artist = spotify.playlist.getPlaylist('37i9dQZF1DXcmgCctFhSfI');

      artist.then((data) => {
        expect(data).to.be.eql({ playlist: 'name' });
      });
    });
  });

  describe('getPlaylistTracks', () => {
    it('Should call fetch method', () => {
      spotify.playlist.getPlaylistTracks();

      expect(stubedFetch).to.be.calledOnce;
    });

    it('Should call fetch with correct url', () => {
      spotify.playlist.getPlaylistTracks('37i9dQZF1DXcmgCctFhSfI');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/playlists/37i9dQZF1DXcmgCctFhSfI/tracks');

      spotify.playlist.getPlaylistTracks('37i9dQZF1DXcmgCctFhSfd');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/playlists/37i9dQZF1DXcmgCctFhSfd/tracks');
    });

    it('Should return the correct data from Promise', () => {
      const artist = spotify.playlist.getPlaylistTracks('37i9dQZF1DXcmgCctFhSfI');

      artist.then((data) => {
        expect(data).to.be.eql({ playlist: 'name' });
      });
    });
  });
});

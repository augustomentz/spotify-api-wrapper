import {
  describe, it, beforeEach, afterEach,
} from 'mocha';
import chai, { expect } from 'chai';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Search', () => {
  let stubedFetch;

  const spotify = new SpotifyWrapper({
    token: 'foo',
  });

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => {} });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('Should exist the {albums} method', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('Should exist the {artists} method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('Should exist the {tracks} method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('Should exist the {playlists} method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('Spotify.search.artists', () => {
    it('Should call {fetch} function', () => {
      spotify.search.artists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.search.artists('Incubus');
      expect(stubedFetch).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=artist',
        );

      spotify.search.artists('Muse');
      expect(stubedFetch).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Muse&type=artist',
        );
    });
  });

  describe('Spotify.search.albums', () => {
    it('Should call {fetch} function', () => {
      spotify.search.albums('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.search.albums('Incubus');
      expect(stubedFetch).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=album',
        );

      spotify.search.albums('Muse');
      expect(stubedFetch).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=album',
        );
    });
  });

  describe('Spotify.search.tracks', () => {
    it('Should call {fetch} function', () => {
      spotify.search.tracks('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.search.tracks('Incubus');
      expect(stubedFetch).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=track',
        );

      spotify.search.tracks('Muse');
      expect(stubedFetch).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=track',
        );
    });
  });

  describe('Spotify.search.playlists', () => {
    it('Should call {fetch} function', () => {
      spotify.search.playlists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.search.playlists('Incubus');
      expect(stubedFetch).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=playlist',
        );

      spotify.search.playlists('Muse');
      expect(stubedFetch).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=playlist',
        );
    });
  });
});

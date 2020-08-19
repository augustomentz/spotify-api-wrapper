import {
  describe, it, beforeEach, afterEach,
} from 'mocha';
import chai, { expect } from 'chai';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Track', () => {
  let stubedFetch;
  const spotify = new SpotifyWrapper({
    token: 'foo',
  });

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ track: 'name' }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('Should exist the {getTrack} method', () => {
      expect(spotify.track.getTrack).to.exist;
    });

    it('Should exist the {getTracks} method', () => {
      expect(spotify.track.getTracks).to.exist;
    });
  });

  describe('getTrack', () => {
    it('Should call fetch method', () => {
      spotify.track.getTrack();
      expect(stubedFetch).to.be.calledOnce;
    });

    it('Should call fetch with correct url', () => {
      spotify.track.getTrack('3QbPw4Aj3JgqG0In3ZPZ4q');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/tracks/3QbPw4Aj3JgqG0In3ZPZ4q');

      spotify.track.getTrack('3QbPw4Aj3JgqG0In3ZPZ4d');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/tracks/3QbPw4Aj3JgqG0In3ZPZ4d');
    });

    it('Should return the correct data from Promise', () => {
      const artist = spotify.track.getTrack('3QbPw4Aj3JgqG0In3ZPZ4q');

      artist.then((data) => {
        expect(data).to.be.eql({ track: 'name' });
      });
    });
  });

  describe('getTracks', () => {
    it('Should call fetch method', () => {
      spotify.track.getTracks();

      expect(stubedFetch).to.be.calledOnce;
    });

    it('Should call fetch with correct url', () => {
      spotify.track.getTracks(['3QbPw4Aj3JgqG0In3ZPZ4q', '7hjAhjnMzpMT9vU54w0LYF']);
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/tracks/?ids=3QbPw4Aj3JgqG0In3ZPZ4q,7hjAhjnMzpMT9vU54w0LYF');

      spotify.track.getTracks(['3QbPw4Aj3JgqG0In3ZPZ4d', '7hjAhjnMzpMT9vU54w0LYc']);
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/tracks/?ids=3QbPw4Aj3JgqG0In3ZPZ4d,7hjAhjnMzpMT9vU54w0LYc');
    });

    it('Should return the correct data from Promise', () => {
      const artists = spotify.track.getTracks(['3QbPw4Aj3JgqG0In3ZPZ4q', '7hjAhjnMzpMT9vU54w0LYF']);

      artists.then((data) => {
        expect(data).to.be.eql({ track: 'name' });
      });
    });
  });
});

import {
  describe, it, beforeEach, afterEach,
} from 'mocha';
import chai, { expect } from 'chai';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Artist', () => {
  let stubedFetch;
  const spotify = new SpotifyWrapper({
    token: 'foo',
  });

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ artist: 'name' }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('Should exist the {getArtist} method', () => {
      expect(spotify.artist.getArtist).to.exist;
    });

    it('Should exist the {getArtistAlbums} method', () => {
      expect(spotify.artist.getArtistAlbums).to.exist;
    });

    it('Should exist the {getArtists} method', () => {
      expect(spotify.artist.getArtists).to.exist;
    });
  });

  describe('getArtist', () => {
    it('Should call fetch method', () => {
      spotify.artist.getArtist();
      expect(stubedFetch).to.be.calledOnce;
    });

    it('Should call fetch with correct url', () => {
      spotify.artist.getArtist('2Jw4Lrfjnyv2QsDoBgnrAP');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/artist/2Jw4Lrfjnyv2QsDoBgnrAP');

      spotify.artist.getArtist('2Jw4Lrfjnyv2QsDoBgnrAC');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/artist/2Jw4Lrfjnyv2QsDoBgnrAC');
    });

    it('Should return the correct data from Promise', () => {
      const artist = spotify.artist.getArtist('2Jw4Lrfjnyv2QsDoBgnrAP');

      artist.then((data) => {
        expect(data).to.be.eql({ artist: 'name' });
      });
    });
  });

  describe('getArtistAlbums', () => {
    it('Should call fetch method', () => {
      spotify.artist.getArtistAlbums();

      expect(stubedFetch).to.be.calledOnce;
    });

    it('Should call fetch with correct url', () => {
      spotify.artist.getArtistAlbums('2Jw4Lrfjnyv2QsDoBgnrAP');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/artist/2Jw4Lrfjnyv2QsDoBgnrAP/albums');

      spotify.artist.getArtistAlbums('2Jw4Lrfjnyv2QsDoBgnrAC');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/artist/2Jw4Lrfjnyv2QsDoBgnrAC/albums');
    });

    it('Should return the correct data from Promise', () => {
      const artist = spotify.artist.getArtistAlbums('2Jw4Lrfjnyv2QsDoBgnrAP');

      artist.then((data) => {
        expect(data).to.be.eql({ artist: 'name' });
      });
    });
  });

  describe('getArtists', () => {
    it('Should call fetch method', () => {
      spotify.artist.getArtists();

      expect(stubedFetch).to.be.calledOnce;
    });

    it('Should call fetch with correct url', () => {
      spotify.artist.getArtists(['2Jw4Lrfjnyv2QsDoBgnrAP', '3qm84nBOXUEQ2vnTfUTTFC']);
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/artists/?ids=2Jw4Lrfjnyv2QsDoBgnrAP,3qm84nBOXUEQ2vnTfUTTFC');

      spotify.artist.getArtists(['2Jw4Lrfjnyv2QsDoBgnrdd', '3qm84nBOXUEQ2vnTfUTTFd']);
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/artists/?ids=2Jw4Lrfjnyv2QsDoBgnrdd,3qm84nBOXUEQ2vnTfUTTFd');
    });

    it('Should return the correct data from Promise', () => {
      const artists = spotify.artist.getArtists(['2Jw4Lrfjnyv2QsDoBgnrAP', '4aawyAB9vmqN3uQ7FjRGTk']);

      artists.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });
});

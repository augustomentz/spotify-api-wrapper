import {
  describe, it, beforeEach, afterEach,
} from 'mocha';
import chai, { expect } from 'chai';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;

  const spotify = new SpotifyWrapper({
    token: 'foo',
  });

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('Should exist the {getAlbum} method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('Should exist the {getAlbums} method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });

    it('Should exist the {getTracks} method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('Should call fetch method', () => {
      spotify.album.getAlbum();
      expect(stubedFetch).to.be.calledOnce;
    });

    it('Should call fetch with correct url', () => {
      spotify.album.getAlbum('0sNOF9WDwhWunNAHPD3Baj');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj');

      spotify.album.getAlbum('0sNOF9WDwhWunNAHPD3Bas');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Bas');
    });

    it('Should return the correct data from Promise', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

      album.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbums', () => {
    it('Should call fetch method', () => {
      spotify.album.getAlbums();
      expect(stubedFetch).to.be.calledOnce;
    });

    it('Should call fetch with correct url', () => {
      spotify.album.getAlbums(['41MnTivkwTO3UUJ8DrqEJJ', '0sNOF9WDwhWunNAHPD3Baj']);
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,0sNOF9WDwhWunNAHPD3Baj');

      spotify.album.getAlbums(['41MnTivkwTO3UUJ8DrqETT', '0sNOF9WDwhWunNAHPD3Bak']);
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqETT,0sNOF9WDwhWunNAHPD3Bak');
    });

    it('Should return the correct data from Promise', () => {
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);

      albums.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbumTracks', () => {
    it('Should call fetch method', () => {
      spotify.album.getTracks();
      expect(stubedFetch).to.be.calledOnce;
    });

    it('Should call fetch with correct url', () => {
      spotify.album.getTracks('0sNOF9WDwhWunNAHPD3Baj');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj/tracks');

      spotify.album.getTracks('0sNOF9WDwhWunNAHPD3Bas');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Bas/tracks');
    });

    it('Should return the correct data from Promise', () => {
      const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');

      tracks.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });
});

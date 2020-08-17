import {
  describe, it, beforeEach, afterEach,
} from 'mocha';
import chai, { expect } from 'chai';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('Should exist the {getAlbum} method', () => {
      expect(getAlbum).to.exist;
    });

    it('Should exist the {getAlbumTracks} method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('Should call fetch method', () => {
      getAlbum();
      expect(stubedFetch).to.be.calledOnce;
    });

    it('Should call fetch with correct url', () => {
      getAlbum('0sNOF9WDwhWunNAHPD3Baj');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj');

      getAlbum('0sNOF9WDwhWunNAHPD3Bas');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Bas');
    });
  });

  describe('getAlbums', () => {
    it('Should call fetch method', () => {
      getAlbums();
      expect(stubedFetch).to.be.calledOnce;
    });

    it('Should call fetch with correct url', () => {
      getAlbums(['41MnTivkwTO3UUJ8DrqEJJ', '0sNOF9WDwhWunNAHPD3Baj']);
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,0sNOF9WDwhWunNAHPD3Baj');

      getAlbums(['41MnTivkwTO3UUJ8DrqETT', '0sNOF9WDwhWunNAHPD3Bak']);
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqETT,0sNOF9WDwhWunNAHPD3Bak');
    });
  });

  describe('getAlbumTracks', () => {
    it('Should call fetch method', () => {
      getAlbumTracks();
      expect(stubedFetch).to.be.calledOnce;
    });

    it('Should call fetch with correct url', () => {
      getAlbumTracks('0sNOF9WDwhWunNAHPD3Baj');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj/tracks');

      getAlbumTracks('0sNOF9WDwhWunNAHPD3Bas');
      expect(stubedFetch)
        .to.be.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Bas/tracks');
    });
  });
});

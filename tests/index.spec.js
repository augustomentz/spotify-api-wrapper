import {
  describe, it, beforeEach, afterEach,
} from 'mocha';
import chai, { expect } from 'chai';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import {
  search, searchAlbuns, searchArtists, searchTracks, searchPlaylists,
} from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Spotify wrapper', () => {
  let fetchedStub;
  // let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    // promise = fetchedStub.resolves({ json: () => ({ json: 'name' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke tests', () => {
    it('Should exist the {search} method', () => {
      expect(search).to.exist;
    });

    it('Should exist the {searchAlbuns} method', () => {
      expect(searchAlbuns).to.exist;
    });

    it('Should exist the {searchArtists} method', () => {
      expect(searchArtists).to.exist;
    });

    it('Should exist the {searchTracks} method', () => {
      expect(searchTracks).to.exist;
    });

    it('Should exist the {searchPlaylists} method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic search', () => {
    it('Should call {fetch} function', () => {
      search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      context('Passing one type', () => {
        search('Incubus', 'artist');

        expect(fetchedStub).to.have.been
          .calledWith(
            'https://api.spotify.com/v1/search?q=Incubus&type=artist',
          );

        search('Incubus', 'album');
        expect(fetchedStub).to.have.been
          .calledWith(
            'https://api.spotify.com/v1/search?q=Incubus&type=album',
          );
      });

      context('Passing more than one type', () => {
        search('Incubus', ['artist', 'album']);
        expect(fetchedStub).to.have.been
          .calledWith(
            'https://api.spotify.com/v1/search?q=Incubus&type=artist,album',
          );
      });
    });

    // it('Should return the JSON Data from the Promise', () => {
    //   promise.resolves({ body: 'json' });

    //   const artists = search('Incubus', 'artist');

    //   expect(artists.resolveValue).to.be.eql({ body: 'json' });
    // });
  });

  describe('searchArtists', () => {
    it('Should call {fetch} function', () => {
      searchArtists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      searchArtists('Incubus');
      expect(fetchedStub).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=artist',
        );

      searchArtists('Muse');
      expect(fetchedStub).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=artist',
        );
    });
  });

  describe('searchAlbuns', () => {
    it('Should call {fetch} function', () => {
      searchAlbuns('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      searchAlbuns('Incubus');
      expect(fetchedStub).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=album',
        );

      searchAlbuns('Muse');
      expect(fetchedStub).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=album',
        );
    });
  });

  describe('searchAlbuns', () => {
    it('Should call {fetch} function', () => {
      searchTracks('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      searchTracks('Incubus');
      expect(fetchedStub).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=track',
        );

      searchTracks('Muse');
      expect(fetchedStub).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=track',
        );
    });
  });

  describe('searchAlbuns', () => {
    it('Should call {fetch} function', () => {
      searchPlaylists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      searchPlaylists('Incubus');
      expect(fetchedStub).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=playlist',
        );

      searchPlaylists('Muse');
      expect(fetchedStub).to.have.been
        .calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=playlist',
        );
    });
  });
});

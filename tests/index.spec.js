import { describe, it } from 'mocha';
import { expect } from 'chai';

import {
  search, searchAlbuns, searchArtists, searchTracks, searchPlaylists,
} from '../src/index';

describe('Spotify wrapper', () => {
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
      const artists = search();
    });
  });
});

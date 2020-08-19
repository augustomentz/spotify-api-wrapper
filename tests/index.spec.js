import chai, { expect } from 'chai';
import {
  describe, it, beforeEach, afterEach,
} from 'mocha';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('SpotifyWrapper Library', () => {
  it('Should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});

    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('Should receive apiURL as an option', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'BABLA',
    });

    expect(spotify.apiURL).to.be.equal('BABLA');
  });

  it('Should use the default apiURL if not provided', () => {
    const spotify = new SpotifyWrapper({});

    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('Should receive token as an option', () => {
    const spotify = new SpotifyWrapper({
      token: 'foo',
    });

    expect(spotify.token).to.be.equal('foo');
  });

  describe('Request method', () => {
    let stubedFetch;

    beforeEach(() => {
      stubedFetch = sinon.stub(global, 'fetch');
      stubedFetch.resolves({ json: () => {} });
    });

    afterEach(() => {
      stubedFetch.restore();
    });

    it('Should be exist in {request} method into SpotifyWrapper', () => {
      const spotify = new SpotifyWrapper({});

      expect(spotify.request).to.be.exist;
      expect(spotify.request).to.be.instanceOf(Function);
    });

    it('Should call fetch when request', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });

      spotify.request('url');
      expect(stubedFetch).to.be.calledOnce;
    });

    it('Should call fetch whit the correct url passed', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });

      spotify.request('url');
      expect(stubedFetch).to.be.been.calledWith('url');
    });

    it('Should call fetch with the correct headers passed', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });

      const headers = {
        headers: {
          Authorization: 'Bearer foo',
        },
      };

      spotify.request('url');
      expect(stubedFetch).to.be.been.calledWith('url', headers);
    });
  });
});

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQCQS8DbOxRjVPEuU8zV7fNTG51UQBziA8H_0y3QBfbGBYcrTbzmB3DkJB5qYeSGidJtISBJNS-Lzh0E3QGguN4jGu7m4k_qzUTeLWntRFmCPofHbq5wUcWgcWNvYxSYFUH0Nm7fGBpXtiaa',
});

const albums = spotify.search.albums('Incubus');

albums.then((data) => data.albums.items.map((item) => console.log(item.name)));

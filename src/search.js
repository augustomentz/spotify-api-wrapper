import API_URL from './config';
// import toJSON from './utils';

export const search = (query, type) => {
  fetch(`${API_URL}/search?q=${query}&type=${type}`, {
    headers: {
      Authorization: 'Bearer BQCjqOMLxU-Bmz1oBHdDkytG97El0B9EoI2XPXTmFNKPeyiz5_d6lu1XKEwSgJRPgeC86jvVml56oduHNizt-IEKFnYp8udai815pVpixINHaVd6DTe1YLeP8d-mc9KCozFb-Piz5QPWygve',
    },
  });
  // .then(toJSON);
};

export const searchArtists = (query) => {
  search(query, 'artist');
};

export const searchAlbums = (query) => {
  search(query, 'album');
};

export const searchTracks = (query) => {
  search(query, 'track');
};

export const searchPlaylists = (query) => {
  search(query, 'playlist');
};

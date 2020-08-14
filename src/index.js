export const search = (query, type) => {
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, {
    headers: {
      Authorization: 'Bearer BQCjqOMLxU-Bmz1oBHdDkytG97El0B9EoI2XPXTmFNKPeyiz5_d6lu1XKEwSgJRPgeC86jvVml56oduHNizt-IEKFnYp8udai815pVpixINHaVd6DTe1YLeP8d-mc9KCozFb-Piz5QPWygve',
    },
  });
};

export const searchArtists = (query) => {
  search(query, 'artist');
};

export const searchAlbuns = (query) => {
  search(query, 'album');
};

export const searchTracks = (query) => {
  search(query, 'track');
};

export const searchPlaylists = (query) => {
  search(query, 'playlist');
};

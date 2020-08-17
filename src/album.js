import API_URL from './config';
// import toJSON from './utils';

export const getAlbum = (id) => {
  fetch(`${API_URL}/albums/${id}`);
};

export const getAlbums = (ids) => {
  fetch(`${API_URL}/albums/?ids=${ids}`);
};

export const getAlbumTracks = (id) => {
  fetch(`${API_URL}/albums/${id}/tracks`);
};

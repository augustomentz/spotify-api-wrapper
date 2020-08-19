export default function playlist() {
  return {
    getPlaylist: (id) => this.request(`${this.apiURL}/playlists/${id}`),
    getPlaylistTracks: (id) => this.request(`${this.apiURL}/playlists/${id}/tracks`),
  };
}

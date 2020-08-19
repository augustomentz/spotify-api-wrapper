// getArtist
// getArtistAlbums
// getArtists
export default function artist() {
  return {
    getArtist: (id) => this.request(`${this.apiURL}/artist/${id}`),
    getArtistAlbums: (id) => this.request(`${this.apiURL}/artist/${id}/albums`),
    getArtists: (ids) => this.request(`${this.apiURL}/artists/?ids=${ids}`),
  };
}

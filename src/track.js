export default function track() {
  return {
    getTrack: (id) => this.request(`${this.apiURL}/tracks/${id}`),
    getTracks: (ids) => this.request(`${this.apiURL}/tracks/?ids=${ids}`),
  };
}

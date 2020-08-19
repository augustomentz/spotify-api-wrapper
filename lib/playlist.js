"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = playlist;

function playlist() {
  var _this = this;

  return {
    getPlaylist: function getPlaylist(id) {
      return _this.request("".concat(_this.apiURL, "/playlists/").concat(id));
    },
    getPlaylistTracks: function getPlaylistTracks(id) {
      return _this.request("".concat(_this.apiURL, "/playlists/").concat(id, "/tracks"));
    }
  };
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = artist;

function artist() {
  var _this = this;

  return {
    getArtist: function getArtist(id) {
      return _this.request("".concat(_this.apiURL, "/artist/").concat(id));
    },
    getArtistAlbums: function getArtistAlbums(id) {
      return _this.request("".concat(_this.apiURL, "/artist/").concat(id, "/albums"));
    },
    getArtists: function getArtists(ids) {
      return _this.request("".concat(_this.apiURL, "/artists/?ids=").concat(ids));
    }
  };
}
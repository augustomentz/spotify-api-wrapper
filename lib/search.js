"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = void 0;

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import toJSON from './utils';
var search = function search(query, type) {
  fetch("".concat(_config["default"], "/search?q=").concat(query, "&type=").concat(type), {
    headers: {
      Authorization: 'Bearer BQCjqOMLxU-Bmz1oBHdDkytG97El0B9EoI2XPXTmFNKPeyiz5_d6lu1XKEwSgJRPgeC86jvVml56oduHNizt-IEKFnYp8udai815pVpixINHaVd6DTe1YLeP8d-mc9KCozFb-Piz5QPWygve'
    }
  }); // .then(toJSON);
};

exports.search = search;

var searchArtists = function searchArtists(query) {
  search(query, 'artist');
};

exports.searchArtists = searchArtists;

var searchAlbums = function searchAlbums(query) {
  search(query, 'album');
};

exports.searchAlbums = searchAlbums;

var searchTracks = function searchTracks(query) {
  search(query, 'track');
};

exports.searchTracks = searchTracks;

var searchPlaylists = function searchPlaylists(query) {
  search(query, 'playlist');
};

exports.searchPlaylists = searchPlaylists;
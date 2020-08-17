"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = void 0;

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import toJSON from './utils';
var getAlbum = function getAlbum(id) {
  fetch("".concat(_config["default"], "/albums/").concat(id)); // .then(toJSON);
};

exports.getAlbum = getAlbum;

var getAlbums = function getAlbums(ids) {
  fetch("".concat(_config["default"], "/albums/?ids=").concat(ids)); // .then(toJSON);
};

exports.getAlbums = getAlbums;

var getAlbumTracks = function getAlbumTracks(id) {
  fetch("".concat(_config["default"], "/albums/").concat(id, "/tracks")); // .then(toJSON);
};

exports.getAlbumTracks = getAlbumTracks;
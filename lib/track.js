"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = track;

function track() {
  var _this = this;

  return {
    getTrack: function getTrack(id) {
      return _this.request("".concat(_this.apiURL, "/tracks/").concat(id));
    },
    getTracks: function getTracks(ids) {
      return _this.request("".concat(_this.apiURL, "/tracks/?ids=").concat(ids));
    }
  };
}
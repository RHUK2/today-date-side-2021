"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var postSchema = new _mongoose["default"].Schema({
  title: String,
  description: String,
  area: String,
  imgURL: Array,
  creator: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User'
  },
  Date: {
    type: Date,
    "default": Date.now()
  }
});

var Post = _mongoose["default"].model('Post', postSchema);

var _default = Post;
exports["default"] = _default;
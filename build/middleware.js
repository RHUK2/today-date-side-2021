"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multerImg = exports.s3 = void 0;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _multer = _interopRequireDefault(require("multer"));

var _multerS = _interopRequireDefault(require("multer-s3"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var s3 = new _awsSdk["default"].S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: 'ap-northeast-2'
});
exports.s3 = s3;
var multerImg = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    s3: s3,
    acl: 'public-read',
    bucket: 'today-date-side/image',
    key: function key(req, file, cb) {
      cb(null, "".concat(file.fieldname, "_").concat(Date.now().toString()));
    }
  })
});
exports.multerImg = multerImg;
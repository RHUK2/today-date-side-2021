"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHashAndSalt = getHashAndSalt;
exports.getHashBySalt = getHashBySalt;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// randomBytes() 메서드는 지정된 크기의 Byte로 랜덤 버퍼를 생성
// pbkdf2() 비밀번호를 암호화하기 위해 해쉬 알고리즘과 소금(salt)를 쳐서
// 강력한 암호화를 지원하는 메서드
function getHashAndSalt(password) {
  return new Promise(function (resolve, reject) {
    _crypto["default"].randomBytes(64, function (err, buf) {
      _crypto["default"].pbkdf2(password, buf.toString('base64'), 100000, 64, 'sha512', function (err, key) {
        resolve([buf.toString('base64'), key.toString('base64')]);
      });
    });
  });
}

function getHashBySalt(password, salt) {
  return new Promise(function (resolve, reject) {
    _crypto["default"].pbkdf2(password, salt.toString('base64'), 100000, 64, 'sha512', function (err, key) {
      resolve(key.toString('base64'));
    });
  });
}
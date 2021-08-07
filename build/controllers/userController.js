"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resGetNicknameCheck = exports.resGetAuth = exports.resGetLogout = exports.resPostLogin = exports.resPostJoin = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _User = _interopRequireDefault(require("../models/User"));

var _util = require("../utils/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 회원가입 로직
var resPostJoin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, email, password, nickname, _yield$getHashAndSalt, _yield$getHashAndSalt2, salt, hash, newUser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password, nickname = _req$body.nickname;
            _context.prev = 1;
            _context.next = 4;
            return (0, _util.getHashAndSalt)(password);

          case 4:
            _yield$getHashAndSalt = _context.sent;
            _yield$getHashAndSalt2 = _slicedToArray(_yield$getHashAndSalt, 2);
            salt = _yield$getHashAndSalt2[0];
            hash = _yield$getHashAndSalt2[1];
            newUser = new _User["default"]({
              email: email,
              salt: salt,
              hash: hash,
              nickname: nickname
            });
            _context.next = 11;
            return newUser.save();

          case 11:
            res.status(200).end();
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](1);
            console.log('resPostJoin Error 🚫 ', _context.t0);
            res.status(400).end();

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 14]]);
  }));

  return function resPostJoin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // 로그인 로직


exports.resPostJoin = resPostJoin;

var resPostLogin = function resPostLogin(req, res, next) {
  // passport.js에 정의되어 있는 local 전략에 따른 유효성 검사 진행
  _passport["default"].authenticate('local', function (err, user, info) {
    if (err) {
      res.status(400).end();
    }

    if (!user) {
      res.status(400).end();
    } // serializer & deserializer 함수 실행


    req.logIn(user, function (err) {
      if (err) {
        res.status(400).end();
      } else {
        res.status(200).end();
      }
    });
  })(req, res, next);
}; // 로그아웃 로직


exports.resPostLogin = resPostLogin;

var resGetLogout = function resGetLogout(req, res) {
  req.logout();
  req.session.destroy();
  res.clearCookie('session_id');
  res.status(200).end();
}; // 인증 로직


exports.resGetLogout = resGetLogout;

var resGetAuth = function resGetAuth(req, res) {
  res.status(200).json({
    user: req.user
  });
};

exports.resGetAuth = resGetAuth;

var resGetNicknameCheck = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var nickname, isNickname;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            nickname = req.query.nickname;
            _context2.prev = 1;
            _context2.next = 4;
            return _User["default"].findOne({
              nickname: nickname
            });

          case 4:
            isNickname = _context2.sent;

            if (isNickname) {
              res.status(200).json({
                isNickname: true
              });
            } else {
              res.status(200).json({
                isNickname: false
              });
            }

            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log('resGetNicknameCheck Error 🚫', _context2.t0);
            res.status(400).end();

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function resGetNicknameCheck(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.resGetNicknameCheck = resGetNicknameCheck;
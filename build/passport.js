"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = require("passport-local");

var _User = _interopRequireDefault(require("./models/User"));

var _util = require("./utils/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function validPassword(_x, _x2, _x3) {
  return _validPassword.apply(this, arguments);
}

function _validPassword() {
  _validPassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(password, salt, hash) {
    var passwordHash;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _util.getHashBySalt)(password, salt);

          case 3:
            passwordHash = _context3.sent;
            return _context3.abrupt("return", passwordHash === hash ? true : false);

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log('validPassword Error 🚫 ', _context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _validPassword.apply(this, arguments);
}

function passportConfig() {
  // passport.authenticate() 메서드로 아래 로컬 전략을 통해
  // 유저가 존재하는지, 비밀번호가 일치하는지 인증을 거침
  _passport["default"].use(new _passportLocal.Strategy( // 클라이언트에서 넘어오는 필드값으로 변경
  {
    usernameField: 'email',
    passwordField: 'password'
  }, /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email, password, done) {
      var isUser, isValid;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _User["default"].findOne({
                email: email
              });

            case 3:
              isUser = _context.sent;

              if (isUser) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", done(null, false, {
                message: 'Incorrect username.'
              }));

            case 6:
              _context.next = 8;
              return validPassword(password, isUser.salt, isUser.hash);

            case 8:
              isValid = _context.sent;

              if (isValid) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", done(null, false, {
                message: 'Incorrect password.'
              }));

            case 11:
              return _context.abrupt("return", done(null, isUser));

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              console.log('LocalStrategy Error 🚫 ', _context.t0);
              return _context.abrupt("return", done(_context.t0));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref.apply(this, arguments);
    };
  }())); // 인증 과정을 거친 후 User data의 고유 ID로 세션 ID 생성


  _passport["default"].serializeUser(function (user, done) {
    console.log('세션 ID 생성');
    done(null, user._id);
  }); // 세션 ID를 다시 User data의 고유 ID로 변경


  _passport["default"].deserializeUser( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id, done) {
      var user;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('세션 ID 해석 및 변환');
              _context2.prev = 1;
              _context2.next = 4;
              return _User["default"].findById(id);

            case 4:
              user = _context2.sent;
              done(null, user);
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.log('deserial Error 🚫 ', _context2.t0);
              return _context2.abrupt("return", done(_context2.t0));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    return function (_x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }());
}

var _default = passportConfig;
exports["default"] = _default;
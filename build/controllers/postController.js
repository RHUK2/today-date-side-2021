"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resDelPost = exports.resPutPostModify = exports.resGetPosts = exports.resGetPost = exports.resPostUpload = void 0;

var _middleware = require("../middleware");

var _Post = _interopRequireDefault(require("../models/Post"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var resPostUpload = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, title, description, area, files, user, imgURL, newPost;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (req.user) {
              _context.next = 3;
              break;
            }

            res.status(400).end();
            return _context.abrupt("return");

          case 3:
            _req$body = req.body, title = _req$body.title, description = _req$body.description, area = _req$body.area, files = req.files, user = req.user;
            imgURL = files.map(function (file) {
              return file.location;
            });
            _context.prev = 5;
            // 새 포스트
            newPost = new _Post["default"]({
              title: title,
              description: description,
              area: area,
              imgURL: imgURL,
              creator: user._id
            });
            _context.next = 9;
            return newPost.save();

          case 9:
            // 작성자에게 포스트 주입
            req.user.post.push(newPost._id);
            _context.next = 12;
            return req.user.save();

          case 12:
            res.status(200).json({
              id: newPost._id
            });
            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](5);
            console.log('resPostUpload Error 🚫', _context.t0);
            res.status(400).end();

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 15]]);
  }));

  return function resPostUpload(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.resPostUpload = resPostUpload;

var resGetPost = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, post;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Post["default"].findById(id).populate('creator');

          case 4:
            post = _context2.sent;
            res.status(200).json({
              post: post
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log('resGetPost Error 🚫 ', _context2.t0);
            res.status(400).end();

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function resGetPost(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.resGetPost = resGetPost;

var resGetPosts = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$query, area, creatorID, term, posts;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$query = req.query, area = _req$query.area, creatorID = _req$query.creatorID, term = _req$query.term;
            posts = null;
            _context3.prev = 2;

            if (!area) {
              _context3.next = 9;
              break;
            }

            _context3.next = 6;
            return _Post["default"].find({
              area: area
            }).populate('creator');

          case 6:
            posts = _context3.sent;
            _context3.next = 24;
            break;

          case 9:
            if (!creatorID) {
              _context3.next = 15;
              break;
            }

            _context3.next = 12;
            return _Post["default"].find({
              creator: creatorID
            }).populate('creator');

          case 12:
            posts = _context3.sent;
            _context3.next = 24;
            break;

          case 15:
            if (!term) {
              _context3.next = 21;
              break;
            }

            _context3.next = 18;
            return _Post["default"].find({
              title: {
                $regex: term,
                $options: 'i'
              }
            }).populate('creator');

          case 18:
            posts = _context3.sent;
            _context3.next = 24;
            break;

          case 21:
            _context3.next = 23;
            return _Post["default"].find({}).populate('creator');

          case 23:
            posts = _context3.sent;

          case 24:
            res.status(200).json({
              posts: posts
            });
            _context3.next = 31;
            break;

          case 27:
            _context3.prev = 27;
            _context3.t0 = _context3["catch"](2);
            console.log('resGetPosts Error 🚫 ', _context3.t0);
            res.status(400).end();

          case 31:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 27]]);
  }));

  return function resGetPosts(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.resGetPosts = resGetPosts;

var resPutPostModify = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, title, description, area;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (req.user) {
              _context4.next = 3;
              break;
            }

            res.status(400).end();
            return _context4.abrupt("return");

          case 3:
            id = req.params.id, _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description, area = _req$body2.area;
            _context4.prev = 4;
            _context4.next = 7;
            return _Post["default"].findByIdAndUpdate(id, {
              title: title,
              description: description,
              area: area
            });

          case 7:
            res.status(200).end();
            _context4.next = 14;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](4);
            console.log('resPutPostModify Error 🚫 ', _context4.t0);
            res.status(400).end();

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 10]]);
  }));

  return function resPutPostModify(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.resPutPostModify = resPutPostModify;

var resDelPost = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, post, user;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (req.user) {
              _context5.next = 3;
              break;
            }

            res.status(400).end();
            return _context5.abrupt("return");

          case 3:
            id = req.params.id;
            _context5.prev = 4;
            _context5.next = 7;
            return _Post["default"].findById(id);

          case 7:
            post = _context5.sent;
            post.imgURL.forEach(function (imageUrl) {
              var key = imageUrl.split('/image/')[1];

              _middleware.s3.deleteObject({
                Bucket: 'today-date-side',
                Key: "image/".concat(key)
              }, function (err, data) {
                if (err) console.log(err, err.stack);else console.log(data);
              });
            });
            _context5.next = 11;
            return _User["default"].findById(post.creator);

          case 11:
            user = _context5.sent;
            user.post = user.post.filter(function (elem) {
              return elem.toString() !== id;
            });
            _context5.next = 15;
            return user.save();

          case 15:
            _context5.next = 17;
            return _Post["default"].findByIdAndRemove(id);

          case 17:
            res.status(200).end();
            _context5.next = 24;
            break;

          case 20:
            _context5.prev = 20;
            _context5.t0 = _context5["catch"](4);
            console.log('resDelPost Err 🚫', _context5.t0);
            res.status(400).end();

          case 24:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[4, 20]]);
  }));

  return function resDelPost(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.resDelPost = resDelPost;
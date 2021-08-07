"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _postController = require("../controllers/postController");

var _userController = require("../controllers/userController");

var _middleware = require("../middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiRouter = _express["default"].Router();

apiRouter.post('/join', _userController.resPostJoin);
apiRouter.post('/login', _userController.resPostLogin);
apiRouter.get('/logout', _userController.resGetLogout);
apiRouter.get('/auth', _userController.resGetAuth);
apiRouter.get('/user/nickname', _userController.resGetNicknameCheck);
apiRouter.post('/upload', _middleware.multerImg.array('fileImg'), _postController.resPostUpload);
apiRouter.get('/post/:id', _postController.resGetPost);
apiRouter.get('/posts', _postController.resGetPosts);
apiRouter.put('/post/:id/edit', _postController.resPutPostModify);
apiRouter["delete"]('/post/:id', _postController.resDelPost);
var _default = apiRouter;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _passport = _interopRequireDefault(require("passport"));

var _morgan = _interopRequireDefault(require("morgan"));

var _passport2 = _interopRequireDefault(require("./passport"));

var _apiRouter = _interopRequireDefault(require("./routers/apiRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config(); // process.env.PORT는 다양한 실행 환경에서 사용할 포트 번호, 없으면 4000으로 설정


var PORT = process.env.PORT || 4000;
var app = (0, _express["default"])(); // 서버와 api 통신 중 CORS 정책 허용하는 미들웨어

app.use((0, _cors["default"])({
  origin: 'http://localhost:3000',
  credentials: true
})); // POST 통신할 때 클라이언트 데이터를 읽기 위한 body parser 미들웨어

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); // POST 통신할 때 브라우저의 쿠키 데이터를 읽기 위한 cookie parser 미들웨어
// express-session 이용 시 필요없으나 혹시 몰라서 적용..

app.use((0, _cookieParser["default"])(process.env.SESSION_KEY)); // express-session

app.use((0, _expressSession["default"])({
  name: 'session_id',
  // 세션 이름
  secret: process.env.SESSION_KEY,
  // 세션 생성을 위한 랜덤 키
  resave: false,
  // false 권장
  saveUninitialized: false,
  // false 권장
  store: _connectMongo["default"].create({
    mongoUrl: process.env.MONGO_ACCESS_KEY
  }),
  // 세션 저장소
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
    secure: false
  } // 세션 생성 기간

})); // passport middelware

app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
(0, _passport2["default"])(); // 통신 상태 메세지 보기 좋게 출력해주는 미들웨어

app.use((0, _morgan["default"])('dev'));
app.use('/', _apiRouter["default"]);
app.listen(PORT, function () {
  console.log("\u2705 Server: On | Port: ".concat(PORT, " "));
});
var _default = app;
exports["default"] = _default;
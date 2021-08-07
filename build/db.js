"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config(); // 로컬 MongoDB or MongoAtlas로 연결을 열어주는 과정
// .env 작성 시 세미콜론(;) 금지


_mongoose["default"].connect(process.env.MONGO_ACCESS_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}); // 보류중인 연결을 인스턴스에 담음


var db = _mongoose["default"].connection; // 그 인스턴스가 연결됐는지 안됐는지 확인

db.on('error', function () {
  return console.error.bind(console, 'db connection error 🚫 ');
});
db.once('open', function () {
  console.log('✅ DB: On | MongoAtlas');
});
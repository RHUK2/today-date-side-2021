import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// 로컬 MongoDB or MongoAtlas로 연결을 열어주는 과정
// .env 작성 시 세미콜론(;) 금지
mongoose.connect(
  process.env.PRODUCTION
    ? process.env.MONGO_ACCESS_KEY_PRO
    : process.env.MONGO_ACCESS_KEY_DEV,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
);

// 보류중인 연결을 인스턴스에 담음
const db = mongoose.connection;

// 그 인스턴스가 연결됐는지 안됐는지 확인
db.on('error', () => console.error.bind(console, 'db connection error 🚫 '));

db.once('open', () => {
  console.log('✅ DB: On | MongoAtlas');
});

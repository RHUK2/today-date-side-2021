import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// 로컬 MongoDB or MongoAtlas로 연결을 열어주는 과정
// .env 작성 시 세미콜론(;) 금지
mongoose.connect(process.env.MONGO_ACCESS_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 보류중인 연결을 인스턴스에 담음
const db = mongoose.connection;

// 그 인스턴스가 연결됐는지 안됐는지 확인
db.on('error', () => console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('✅ DB: On | MongoAtlas');
});

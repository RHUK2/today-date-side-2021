import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import morgan from 'morgan';
import path from 'path';

import passportConfig from './passport';
import apiRouter from './routers/apiRouter';

dotenv.config();

// process.env.PORT는 다양한 실행 환경에서 사용할 포트 번호, 없으면 4000으로 설정
// heroku 배포 시 환경 변수 설정 필요!!!!!!!!!!!!!!!!!!!!
const PORT = process.env.PORT || 4000;

const app = express();

// 😀
app.use(express.static(path.join(__dirname, '..', 'client/build')));
// 서버와 api 통신 중 CORS 정책 허용하는 미들웨어
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? process.env.BASE_URL
        : 'http://localhost:3000',
    credentials: true,
  }),
);
// POST 통신할 때 클라이언트 데이터를 읽기 위한 body parser 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// POST 통신할 때 브라우저의 쿠키 데이터를 읽기 위한 cookie parser 미들웨어
// express-session 이용 시 필요없으나 혹시 몰라서 적용..
app.use(cookieParser(process.env.SESSION_KEY));
// express-session
app.use(
  session({
    name: 'session_id', // 세션 이름
    secret: process.env.SESSION_KEY, // 세션 생성을 위한 랜덤 키
    resave: false, // false 권장
    saveUninitialized: false, // false 권장
    store: MongoStore.create({
      mongoUrl:
        process.env.NODE_ENV === 'production'
          ? process.env.MONGO_ACCESS_KEY_PRO
          : process.env.MONGO_ACCESS_KEY_DEV,
    }), // 세션 저장소
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
      secure: false,
    }, // 세션 생성 기간
  }),
);
// passport middelware
app.use(passport.initialize());
app.use(passport.session());
passportConfig();
// 통신 상태 메세지 보기 좋게 출력해주는 미들웨어
app.use(morgan('dev'));

app.use('/', apiRouter);

// 😀
app.get('/', (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', '/client/build', 'index.html'),
  );
});

app.listen(PORT, () => {
  console.log(`✅ Server: On | Port: ${PORT} `);
});

export default app;

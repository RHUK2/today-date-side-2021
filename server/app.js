import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import apiRouter from './routers/apiRouter';

dotenv.config();

// process.env.PORT는 다양한 실행 환경에서 사용할 포트 번호, 없으면 4000으로 설정
const PORT = process.env.PORT || 4000;

const app = express();

// 서버와 api 통신 중 CORS 정책 허용하는 미들웨어
app.use(cors());
// POST 통신할 때 클라이언트 데이터를 읽기 위한 body parser 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.listen(PORT, () => {
  console.log(`✅ Server: On | Port: ${PORT} `);
});

export default app;

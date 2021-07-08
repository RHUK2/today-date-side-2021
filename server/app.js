import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRouter from './router/apiRouter';
// dotenv
dotenv.config();

// 배포되는 서버 환경에서 사용할 수 있게 설정
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.listen(PORT, () => {
  console.log(`✅ Server: On | Port: ${PORT} `);
});

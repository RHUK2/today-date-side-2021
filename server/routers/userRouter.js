import express from 'express';
import {
  resGetLogout,
  resPostJoin,
  resPostLogin,
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/join', resPostJoin);

userRouter.post('/login', resPostLogin);

userRouter.get('/logout', resGetLogout);

export default userRouter;

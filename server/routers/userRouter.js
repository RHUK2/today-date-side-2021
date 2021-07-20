import express from 'express';
import {
  resGetUser,
  resGetLogout,
  resPostJoin,
  resPostLogin,
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/join', resPostJoin);

userRouter.post('/login', resPostLogin);

userRouter.get('/logout', resGetLogout);

userRouter.get('/user', resGetUser);

export default userRouter;

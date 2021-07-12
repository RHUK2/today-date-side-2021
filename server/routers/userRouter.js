import express from 'express';
import { resPostJoin } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/join', resPostJoin);

// userRouter.post('login', postLogin);

export default userRouter;

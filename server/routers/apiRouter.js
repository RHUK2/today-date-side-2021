import express from 'express';
import {
  resGetPost,
  resGetPosts,
  resPostUpload,
} from '../controllers/postController';
import {
  resGetLogout,
  resGetAuth,
  resPostJoin,
  resPostLogin,
} from '../controllers/userController';
import { multerImg } from '../middleware';

const apiRouter = express.Router();

apiRouter.post('/join', resPostJoin);

apiRouter.post('/login', resPostLogin);

apiRouter.get('/logout', resGetLogout);

apiRouter.get('/auth', resGetAuth);

apiRouter.post('/upload', multerImg.array('fileImg'), resPostUpload);

apiRouter.get('/post/:id', resGetPost);

apiRouter.get('/posts', resGetPosts);

export default apiRouter;

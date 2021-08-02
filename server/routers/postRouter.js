import express from 'express';
import {
  resGetAllPost,
  resGetPost,
  resGetPostArea,
  resPostUpload,
} from '../controllers/postController';
import { multerImg } from '../middleware';

const postRouter = express.Router();

postRouter.post('/write', multerImg.array('fileImg'), resPostUpload);

postRouter.get('/all-post', resGetAllPost);

postRouter.get('/place', resGetPostArea);

postRouter.get('/:id', resGetPost);

export default postRouter;

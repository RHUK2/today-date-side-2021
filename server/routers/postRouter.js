import express from 'express';
import { resGetPost, resPostUpload } from '../controllers/postController';
import { multerImg } from '../middleware';

const postRouter = express.Router();

postRouter.post('/write', multerImg.array('fileImg'), resPostUpload);

postRouter.get('/:id', resGetPost);

export default postRouter;

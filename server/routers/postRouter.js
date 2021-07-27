import express from 'express';
import { resPostUpload } from '../controllers/postController';
import { multerImg } from '../middleware';

const postRouter = express.Router();

postRouter.post('/write', multerImg.array('fileImg'), resPostUpload);

export default postRouter;

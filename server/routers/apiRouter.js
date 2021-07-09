import express from 'express';

import { dbTest } from '../controllers/userController';

const apiRouter = express.Router();

apiRouter.get('', (req, res) => {
  res.send('getTest');
});

apiRouter.post('', dbTest);

export default apiRouter;

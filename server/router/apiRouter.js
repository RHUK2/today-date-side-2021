import express from 'express';

const apiRouter = express.Router();

apiRouter.get('', (req, res) => {
  res.send('getTest');
});

apiRouter.post('', (req, res) => {
  console.log(req.body);
});

export default apiRouter;

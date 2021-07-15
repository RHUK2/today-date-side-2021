import express from 'express';
import passport from 'passport';
import { resPostJoin } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/join', resPostJoin);

userRouter.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send('User is not exist.');
    }
    // serializer 함수 실행
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.json(req.user);
    });
  })(req, res, next);
});

export default userRouter;

import passport from 'passport';
import User from '../models/User';
import { getHashAndSalt } from '../utils/util';

export const resPostJoin = async (req, res) => {
  const { email, password, nickname } = req.body;
  try {
    const [salt, hash] = await getHashAndSalt(password);
    const newUser = new User({
      email,
      salt,
      hash,
      nickname,
    });
    const savedUser = await newUser.save();
    return res.send(savedUser);
  } catch (err) {
    console.log('resPostJoin Error 🚫 ', err);
  }
};

export const resPostLogin = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send(user);
    }
    // serializer 함수 실행
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.send(user);
    });
  })(req, res, next);
};

export const resGetLogout = (req, res) => {
  req.session.destroy();
  res.clearCookie('session_id');
  req.logout();
  return res.send('User is logged out.');
};

import passport from 'passport';
import User from '../models/User';
import { getHashAndSalt } from '../utils/util';

// 회원가입 로직
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
    await newUser.save();
    res.status(200).end();
  } catch (err) {
    console.log('resPostJoin Error 🚫 ', err);
    res.status(400).end();
  }
};

// 로그인 로직
export const resPostLogin = (req, res, next) => {
  // passport.js에 정의되어 있는 local 전략에 따른 유효성 검사 진행
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      res.status(400).end();
    }
    if (!user) {
      res.status(400).end();
    }
    // serializer & deserializer 함수 실행
    req.logIn(user, function (err) {
      if (err) {
        res.status(400).end();
      } else {
        res.status(200).end();
      }
    });
  })(req, res, next);
};

// 로그아웃 로직
export const resGetLogout = (req, res) => {
  req.logout();
  req.session.destroy();
  res.clearCookie('session_id');
  res.status(200).end();
};

// 인증 로직
export const resGetAuth = (req, res) => {
  res.status(200).json({ user: req.user });
};

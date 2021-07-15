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
    await newUser.save();
    return res.send('User is created.');
  } catch (e) {
    console.log(e);
    return res.send('User is not created.');
  }
};

export const resPostLogout = async (req, res) => {
  req.logout();
  res.redirect('/');
};

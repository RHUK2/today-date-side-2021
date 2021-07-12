import crypto from 'crypto';
import User from '../models/User';

// hash + salt 암호화
// randomBytes 64Byte 크기의 랜덤 버퍼 생성
// 비밀번호에 랜덤 버퍼를 문자열화 시켜서 소금 뿌려줌
// 100000번 반복, 64Byte 크기, 해쉬 알고리즘 sha512
// key 생성
function covertToHashSalt(password) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      crypto.pbkdf2(
        password,
        buf.toString('base64'),
        100000,
        64,
        'sha512',
        (err, key) => {
          resolve(key.toString('base64'));
        },
      );
    });
  });
}

export const resPostJoin = async (req, res) => {
  const { email, password, nickname } = req.body;
  let salt = null;

  try {
    salt = await covertToHashSalt(password);
    const newUser = new User({
      email,
      salt,
      nickname,
    });
    await newUser.save();
    return res.status(200).json();
  } catch (e) {
    console.log(e);
    return res.status(400).json();
  }
};

import crypto from 'crypto';

// randomBytes() 메서드는 지정된 크기의 Byte로 랜덤 버퍼를 생성
// pbkdf2() 비밀번호를 암호화하기 위해 해쉬 알고리즘과 소금(salt)를 쳐서
// 강력한 암호화를 지원하는 메서드
export function getHashAndSalt(password) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      crypto.pbkdf2(
        password,
        buf.toString('base64'),
        100000,
        64,
        'sha512',
        (err, key) => {
          resolve([buf.toString('base64'), key.toString('base64')]);
        },
      );
    });
  });
}

export function getHashBySalt(password, salt) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(
      password,
      salt.toString('base64'),
      100000,
      64,
      'sha512',
      (err, key) => {
        resolve(key.toString('base64'));
      },
    );
  });
}

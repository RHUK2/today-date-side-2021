import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from './models/User';
import { getHashBySalt } from './utils/util';

async function validPassword(password, salt, hash) {
  try {
    const passwordHash = await getHashBySalt(password, salt);
    return passwordHash === hash ? true : false;
  } catch (err) {
    console.log('validPassword Error 🚫 ', err);
  }
}

function passportConfig() {
  // passport.authenticate() 메서드로 아래 로컬 전략을 통해
  // 유저가 존재하는지, 비밀번호가 일치하는지 인증을 거침
  passport.use(
    new LocalStrategy(
      // 클라이언트에서 넘어오는 필드값으로 변경
      { usernameField: 'email', passwordField: 'password' },
      async function (email, password, done) {
        try {
          // 입력 받은 email이 DB에 존재하는지 확인
          const isUser = await User.findOne({ email });
          if (!isUser) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          // 입력 받은 password를 암호화한 것과 DB의 것과 같은지 확인
          const isValid = await validPassword(
            password,
            isUser.salt,
            isUser.hash,
          );
          if (!isValid) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, isUser);
        } catch (err) {
          console.log('LocalStrategy Error 🚫 ', err);
          return done(err);
        }
      },
    ),
  );

  // 인증 과정을 거친 후 User data의 고유 ID로 세션 ID 생성
  passport.serializeUser(function (user, done) {
    console.log('serial');
    done(null, user._id);
  });

  // 세션 ID를 다시 User data의 고유 ID로 변경
  passport.deserializeUser(async function (id, done) {
    console.log('deserial');
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      console.log('deserial Error 🚫 ', err);
      return done(err);
    }
  });
}

export default passportConfig;

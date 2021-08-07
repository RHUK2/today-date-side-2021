import { useEffect } from 'react';
import { useState } from 'react';
import { reqGetNicknameCheck, reqPostJoin } from '../api/userApi';
import Join from '../pages/Join';

function JoinContainer({ history }) {
  // Input State
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
  });
  const [isSame, setIsSame] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [existNickname, setExistNickname] = useState(false);
  const [isFocusNickname, setIsFocusNickname] = useState(false);

  useEffect(() => {
    const { password, passwordCheck, nickname } = userInfo;
    if (passwordCheck.length > 0) {
      setIsFocus(true);
    } else {
      setIsFocus(false);
    }
    if (nickname.length > 0) {
      setIsFocusNickname(true);
    } else {
      setIsFocusNickname(false);
    }
    if (password === passwordCheck) {
      setIsSame(true);
    } else {
      setIsSame(false);
    }
  }, [userInfo]);

  const onChange = (e) => {
    const { name, value } = e.target;
    // 이벤트 핸들러 안에서 setState는 비동기로 동작하는 걸 잊지 말자.
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmitUserInfo = async (e) => {
    e.preventDefault();
    if (existNickname) {
      alert('닉네임을 변경해주세요.');
      return;
    }
    try {
      await reqPostJoin(userInfo);
      alert('회원가입이 완료되었습니다.\n로그인 페이지로 이동합니다.');
      history.push('/login');
    } catch (err) {
      console.log('Join Error 🚫 ', err);
      history.push('/');
    }
  };

  const onHandleBlur = async () => {
    const {
      data: { isNickname },
    } = await reqGetNicknameCheck(userInfo.nickname);
    setExistNickname(isNickname);
  };

  const onHandleFocus = () => {
    setExistNickname(false);
  };

  return (
    <Join
      userInfo={userInfo}
      isSame={isSame}
      isFocus={isFocus}
      isFocusNickname={isFocusNickname}
      existNickname={existNickname}
      onSubmitUserInfo={onSubmitUserInfo}
      onChange={onChange}
      onHandleBlur={onHandleBlur}
      onHandleFocus={onHandleFocus}
    />
  );
}

export default JoinContainer;

import { useEffect } from 'react';
import { useState } from 'react';
import { reqPostJoin } from '../api/apiCall';
import Join from '../pages/Join';

function JoinContainer({ history }) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
  });
  const [isSame, setIsSame] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    const { password, passwordCheck } = userInfo;
    if (passwordCheck.length > 0) {
      setIsFocus(true);
    } else {
      setIsFocus(false);
    }
    if (password === passwordCheck) {
      setIsSame(true);
    } else {
      setIsSame(false);
    }
  }, [userInfo]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    // setState는 이벤트 핸들러 안에서 비동기..ㄴ
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await reqPostJoin(userInfo);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Join
      userInfo={userInfo}
      isSame={isSame}
      isFocus={isFocus}
      onHandleSubmit={onHandleSubmit}
      onHandleChange={onHandleChange}
    />
  );
}

export default JoinContainer;

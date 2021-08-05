import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reqPostLogin } from '../api/userApi';
import { authAction } from '../reducers/userReducer';
import Login from '../pages/Login';

function LoginContainer({ history }) {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userInput;
    try {
      await reqPostLogin(email, password);
      dispatch(authAction());
      history.push('/');
    } catch (err) {
      alert('로그인에 실패했습니다.\n이메일과 비밀번호를 확인해주세요.');
    }
  };

  return <Login onChange={onChange} onSubmitLogin={onSubmitLogin} />;
}

export default LoginContainer;

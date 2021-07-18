import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reqPostLogin } from '../api/apiCall';
import Login from '../pages/Login';
import { loginSuccess } from '../reducers/loginStatusReducer';

function LoginContainer({ history }) {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: user } = await reqPostLogin(userInput);
      if (user) {
        dispatch(loginSuccess());
        history.push('/');
      } else {
        alert('이메일 또는 비밀번호가 올바르지 않습니다.');
      }
    } catch (err) {
      console.log('Login Error 🚫 ', err);
    }
  };

  return (
    <Login onHandleChange={onHandleChange} onHandleSubmit={onHandleSubmit} />
  );
}

export default LoginContainer;

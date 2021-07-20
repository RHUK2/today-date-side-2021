import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reqPostLogin } from '../api/apiCall';
import Login from '../pages/Login';
import { loginAction } from '../reducers/loginStatusReducer';

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

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { isLoggedIn },
      } = await reqPostLogin(userInput);
      if (isLoggedIn) {
        dispatch(loginAction());
        alert('로그인 되었습니다.');
        history.push('/');
      } else {
        alert('사용자를 찾을 수 없습니다.');
      }
    } catch (err) {
      console.log('Login Error 🚫 ', err);
    }
  };

  return <Login onHandleChange={onHandleChange} onLogin={onLogin} />;
}

export default LoginContainer;

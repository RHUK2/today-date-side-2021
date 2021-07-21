import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginAction } from '../reducers/userReducer';

import Login from '../pages/Login';

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

  const onLogin = (e) => {
    e.preventDefault();
    const { email, password } = userInput;
    dispatch(loginAction(email, password));
    history.push('/');
  };

  return <Login onHandleChange={onHandleChange} onLogin={onLogin} />;
}

export default LoginContainer;

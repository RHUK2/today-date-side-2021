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

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const { email, password } = userInput;
    dispatch(loginAction(email, password));
    history.push('/');
  };

  return <Login onChange={onChange} onSubmitLogin={onSubmitLogin} />;
}

export default LoginContainer;

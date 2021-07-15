import { useState } from 'react';
import { reqPostLogin } from '../api/apiCall';
import Login from '../pages/Login';

function LoginContainer({ history }) {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const onHandleChange = async (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await reqPostLogin(userInput);
      console.log(response);
      history.push('/');
    } catch (e) {
      console.log('Login Error 🚫 ', e);
    }
  };

  return (
    <Login onHandleChange={onHandleChange} onHandleSubmit={onHandleSubmit} />
  );
}

export default LoginContainer;

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export const reqPostJoin = (userInfo) => {
  return api.post('/join', {
    ...userInfo,
  });
};

export const reqPostLogin = (userInput) => {
  return api.post(
    '/login',
    {
      ...userInput,
    },
    {
      withCredentials: true,
    },
  );
};

export const reqGetLogout = () => {
  return api.get('/logout', {
    withCredentials: true,
  });
};

export const reqGetUser = () => {
  return api.get('/user', {
    withCredentials: true,
  });
};

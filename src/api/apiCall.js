import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export const getTest = () => {
  return api.get('/');
};

export const postTest = () => {
  return api.post('/', {
    name: 'Tomas',
  });
};

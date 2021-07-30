import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/post',
});

export const reqPostUpload = (formData) => {
  return api.post('/write', formData, {
    withCredentials: true,
    headers: { 'content-type': 'multipart/form-data' },
  });
};

export const reqGetPost = (_id) => {
  return api.get(`/${_id}`);
};

export const reqGetAllPost = () => {
  return api.get('/all-post');
};

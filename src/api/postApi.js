import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export const reqPostUpload = (formData) => {
  return api.post('/upload', formData, {
    withCredentials: true,
    headers: { 'content-type': 'multipart/form-data' },
  });
};

export const reqGetPost = (_id) => {
  return api.get(`/post/${_id}`);
};

export const reqGetPosts = (area) => {
  return api.get('/posts', {
    params: {
      area,
    },
  });
};

export const reqPutPostModify = (_id, data) => {
  return api.put(`/post/${_id}/edit`, data, {
    withCredentials: true,
  });
};

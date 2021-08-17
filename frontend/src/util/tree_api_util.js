import axios from 'axios';

export const getTrees = () => {
  return axios.get('/api/trees')
};

export const getUserTree = id => {
  return axios.get(`/api/trees/user/${id}`)
};

export const createTree = data => {
  return axios.post('/api/trees/', data)
}

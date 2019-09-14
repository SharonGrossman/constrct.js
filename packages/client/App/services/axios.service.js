import axios from 'axios';

export const instance = axios.create({
  baseURL: '/api',
  responseType: 'json'
});

export const authInstance = axios.create({
  baseURL: '/auth',
  responseType: 'json'
});

export const updateHeaderToken = token => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

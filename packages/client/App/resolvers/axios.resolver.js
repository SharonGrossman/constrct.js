import axios from 'axios';
import { getFromLocalStorage } from './localStorage.resolver';

export const api = axios.create({
  baseURL: '/api',
  responseType: 'json',
  config: {
    headers: {
      Authorization: `Bearer ${getFromLocalStorage({ key: 'token' })}`
    }
  }
});

export const auth = axios.create({
  baseURL: '/auth',
  responseType: 'json'
});

const instances = { auth, api };

export const extractInstanceFromUrl = url => {
  const [, prefix, ...rest] = url.split('/');
  const api = [...rest].join('/');

  return [instances[prefix], api];
};

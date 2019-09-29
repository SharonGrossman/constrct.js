import axios from 'axios';
import { getTokenFromLocalStorage } from '../../resolvers/localStorage.resolver';

const instances = {
  api: axios.create({
    baseURL: '/api',
    responseType: 'json',
    config: {
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`
      }
    }
  }),
  auth: axios.create({
    baseURL: '/auth',
    responseType: 'json'
  })
};

instances.api.interceptors.request.use(config => ({
  ...config,
  headers: { ...config.headers, Authorization: `Bearer ${getTokenFromLocalStorage()}` }
}));

export const resolveUrl = url => {
  const [, prefix, ...rest] = url.split('/');
  const api = [...rest].join('/');

  return [instances[prefix], api];
};

export default instances;

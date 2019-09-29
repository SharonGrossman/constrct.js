import axios from 'axios';
import { getFromLocalStorage } from '../../resolvers/localStorage.resolver';

const instances = {
  api: axios.create({
    baseURL: '/api',
    responseType: 'json',
    config: {
      headers: {
        Authorization: `Bearer ${getFromLocalStorage({ key: 'token' })}`
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
  headers: { ...config.headers, Authorization: `Bearer ${getFromLocalStorage({ key: 'token' })}` }
}));

export const resolveUrl = url => {
  const [, prefix, ...rest] = url.split('/');
  const api = [...rest].join('/');

  return [instances[prefix], api];
};

export default instances;

import axios from 'axios';

export const authClient = axios.create({
  baseURL: `${AUTH_API_URL}/`,
  responseType: 'json'
});

export const userClient = axios.create({
  baseURL: `${USER_API_URL}/`,
  responseType: 'json'
});

export default [userClient, authClient];

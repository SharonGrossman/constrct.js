import React from 'react';
import axios from 'axios';
import { useToken } from '../../Providers/TokenProvider';
import { generateApi } from './generate-api';

export const authClient = axios.create({
  baseURL: `${AUTH_API_URL}/`,
  responseType: 'json'
});

export default () => {
  const { get, post } = generateApi({ instance: authClient });
  const { removeToken } = useToken();

  const login = async ({ email, password }) => {
    const { token } = await post({ url: '/', body: { email, password } });

    return token;
  };

  const logout = () => {
    removeToken();
  };

  return { login, logout };
};

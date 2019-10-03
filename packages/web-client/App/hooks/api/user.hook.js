import React from 'react';
import axios from 'axios';
import { generateApi } from './generate-api';

export const userClient = axios.create({
  baseURL: `${USER_API_URL}/`,
  responseType: 'json'
});

export default () => {
  const { get, post } = generateApi({ instance: userClient });

  const getMyself = async () => get({ url: '/me' });

  const createUser = async ({ email, password, name }) => {
    const { token } = await post({ url: '/', body: { email, password, name } });

    return token;
  };

  return { getMyself, createUser };
};

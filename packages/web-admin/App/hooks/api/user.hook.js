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
  const getUser = async ({ id }) => get({ url: `/${id}` });
  const getAllUsers = async () => get({ url: '/' });

  return { getMyself, getAllUsers, getUser };
};

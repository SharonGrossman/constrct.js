import React from 'react';
import { useToken } from '../Providers/TokenProvider';
import { useUser } from '../Providers/UserProvider';
import { resolveError } from '../resolvers/error.resolver';
import useAxios from './axios.hook';

const useAuth = () => {
  const { setToken, removeToken } = useToken();
  const { post } = useAxios();

  const login = async ({ email, password }) => {
    const { token } = await post({ url: '/auth/local', body: { email, password } });

    setToken(token);
  };

  const logout = () => {
    removeToken();
  };

  const register = async ({ email, password, name }) => {
    const { token } = await post({ url: '/api/users', body: { email, password, name } });

    setToken(token);
  };

  return { login, logout, register };
};

export default useAuth;

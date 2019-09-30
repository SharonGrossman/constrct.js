import React from 'react';
import { useToken } from '../Providers/TokenProvider';
import { useUser } from '../Providers/UserProvider';
import { resolveError } from '../resolvers/error.resolver';
import { useApi, useAuth } from './axios.hook';

const useAuthActions = () => {
  const { setToken, removeToken } = useToken();
  const { post: authPost } = useAuth();
  const { post: apiPost } = useApi();

  const login = async ({ email, password }) => {
    const { token } = await authPost({ url: '/local', body: { email, password } });

    setToken(token);
  };

  const logout = () => {
    removeToken();
  };

  const register = async ({ email, password, name }) => {
    const { token } = await apiPost({ url: '/users', body: { email, password, name } });

    setToken(token);
  };

  return { login, logout, register };
};

export default useAuthActions;

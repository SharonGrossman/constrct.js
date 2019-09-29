import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from '../UserProvider';
import { resolveAuthError } from '../../resolvers/error.resolver';
import { api } from '../../resolvers/axios.resolver';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setLocalStorage
} from '../../resolvers/localStorage.resolver';

const initialState = {
  token: null
};

const TokenContext = createContext(initialState);

export default props => {
  const [token, setToken] = useState(getFromLocalStorage({ key: 'token' }));
  const { fetchUser, user, removeUser } = useUser();

  const resolveToken = async token => {
    setToken(token);
    if (token) {
      setLocalStorage({ key: 'token', value: token });
      await fetchUser();

      return;
    }

    removeUser();
    removeFromLocalStorage({ key: 'token' });
  };

  const removeToken = () => setToken(null);

  const handleResponseError = error => {
    const { expireToken } = resolveAuthError({ error, token, user });

    if (expireToken) {
      removeToken();
      error = { ...error, general: true };
    }

    throw error;
  };

  const initializeInterceptors = () => {
    api.interceptors.response.use(response => response, handleResponseError);

    api.interceptors.request.use(config => ({
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${getFromLocalStorage({ key: 'token' })}`
      }
    }));
  };

  useEffect(() => {
    resolveToken(token);
  }, [token]);

  useEffect(() => {
    initializeInterceptors();
    resolveToken(token);
  }, []);

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
        resolveToken,
        removeToken
      }}
      {...props}
    />
  );
};

export const useToken = () => useContext(TokenContext);

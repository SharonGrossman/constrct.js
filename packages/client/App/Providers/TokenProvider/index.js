import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from '../UserProvider';
import { api } from '../../hooks/axios.hook';
import { generalizeError } from '../../resolvers/error.resolver';
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
  const { fetchUser, removeUser } = useUser();

  const resolveToken = async token => {
    if (token) {
      setLocalStorage({ key: 'token', value: token });
      await fetchUser();

      return;
    }

    removeUser();
    removeFromLocalStorage({ key: 'token' });
  };

  const removeToken = () => setToken(null);

  const handleForceLogout = error => {
    if (token && !getFromLocalStorage({ key: 'token' })) {
      removeToken();
      error = generalizeError({ error });
    }

    throw error;
  };

  const initializeInterceptors = () => {
    api.interceptors.response.use(response => response, handleForceLogout);

    api.interceptors.request.use(config => ({
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${getFromLocalStorage({ key: 'token' })}`
      }
    }));
  };

  useEffect(() => {
    initializeInterceptors();
    resolveToken(token);
  }, [token]);

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
        removeToken
      }}
      {...props}
    />
  );
};

export const useToken = () => useContext(TokenContext);

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from '../UserProvider';
import { resolveAuthError } from '../../resolvers/error.resolver';
import instances from '../../resolvers/axios.resolver';
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
    } else {
      removeUser();
      removeFromLocalStorage({ key: 'token' });

      return;
    }
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

  instances.api.interceptors.response.use(response => response, handleResponseError);

  useEffect(() => {
    resolveToken(token);
  }, [token]);

  useEffect(() => {
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

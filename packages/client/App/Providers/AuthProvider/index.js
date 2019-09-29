import React, { createContext, useContext, useEffect, useState } from 'react';
import useAxios from '../../hooks/axios.hook';
import { useUser } from '../UserProvider';
import { resolveAuthError } from '../../resolvers/error.resolver';
import instances from '../../resolvers/axios.resolver';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setLocalStorage
} from '../../resolvers/localStorage.resolver';

const initialState = {
  token: null,
  user: null,
  authenticated: false
};

const AuthContext = createContext(initialState);

export default props => {
  const [token, setToken] = useState(getFromLocalStorage({ key: 'token' }));
  const { get } = useAxios();
  const { authenticate, authenticated, removeUser } = useUser();

  const resolveToken = async token => {
    setToken(token);
    if (token) {
      setLocalStorage({ key: 'token', value: token });
      await authenticate();
    } else {
      removeUser();
      removeFromLocalStorage({ key: 'token' });

      return;
    }
  };

  const removeToken = () => resolveToken(null);

  const handleResponseError = error => {
    const { expireToken } = resolveAuthError({ error, token, authenticated });

    if (expireToken) {
      removeToken();
      error = { ...error, general: true };
    }

    throw error;
  };

  instances.api.interceptors.response.use(response => response, handleResponseError);

  useEffect(() => {
    resolveToken(token);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        resolveToken,
        removeToken
      }}
      {...props}
    />
  );
};

export const useAuth = () => useContext(AuthContext);

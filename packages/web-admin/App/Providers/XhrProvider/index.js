import React, { createContext, useEffect } from 'react';
import axios from 'axios';
import { generalizeError, resolveError } from '../../resolvers/error.resolver';
import { getFromLocalStorage } from '../../resolvers/localStorage.resolver';
import { useToken } from '../TokenProvider';
import clients from '../../hooks/api/clients';

const XhrContext = createContext({ authClient: null, userClient: null });

export default props => {
  const { removeToken, token } = useToken();

  const errorHandler = error => {
    if (token && !getFromLocalStorage({ key: 'token' })) {
      removeToken();

      error = generalizeError({ error });
    }

    error = resolveError({ error });

    throw error;
  };

  const initializeInterceptors = () =>
    clients.map(client => {
      client.interceptors.response.use(response => response, errorHandler);

      client.interceptors.request.use(config => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getFromLocalStorage({ key: 'token' })}`
        }
      }));

      return client;
    });

  useEffect(() => {
    initializeInterceptors();
  }, []);

  return <XhrContext.Provider value={{}} {...props} />;
};

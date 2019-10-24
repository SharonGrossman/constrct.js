import React, { useEffect, Fragment } from 'react';
import {
  generalizeError,
  getErrorMessage,
  getErrorStatus,
  UNAUTHORIZED_STATUSES
} from '../../resolvers/error.resolver';
import { useAuth } from '../../Providers/AuthProvider';
import clients from './clients';

export default ({ children }) => {
  const { setLoggedOut, getToken } = useAuth();

  const errorHandler = error => {
    const status = getErrorStatus(error);

    if (UNAUTHORIZED_STATUSES.includes(status)) {
      error = generalizeError(error);
      setLoggedOut();
    }

    error = getErrorMessage(error);

    throw error;
  };

  const authErrorHandler = error => {
    error = getErrorMessage(error);

    throw error;
  };

  const setAuthInterceptor = ({ instance }) =>
    instance.interceptors.response.use(response => response, authErrorHandler);
  const setApiInterceptor = ({ instance }) => {
    instance.interceptors.response.use(response => response, errorHandler);
    instance.interceptors.request.use(config => ({
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${getToken()}`
      }
    }));
  };

  const initialize = () =>
    clients.map(({ instance, authRequired }) => {
      const setInstanceInterceptor = authRequired ? setApiInterceptor : setAuthInterceptor;

      return setInstanceInterceptor({ instance });
    });

  useEffect(() => {
    initialize();
  }, []);

  return <>{children}</>;
};

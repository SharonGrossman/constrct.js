import { generalizeError, resolveError } from '../../resolvers/error.resolver';
import { getFromLocalStorage } from '../../resolvers/localStorage.resolver';
import { useToken } from '../../Providers/TokenProvider';
import clients from './clients';

export default () => {
  const { removeToken, token } = useToken();

  const errorHandler = error => {
    if (token && !getFromLocalStorage({ key: 'token' })) {
      removeToken();

      error = generalizeError({ error });
    }

    error = resolveError({ error });

    throw error;
  };

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
};

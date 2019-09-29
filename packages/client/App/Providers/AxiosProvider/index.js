import React, { useContext, createContext } from 'react';
import { useLoading } from '../LoadingProvider';
import { resolveError } from '../../resolvers/error.resolver';
import { resolveUrl } from './axios';

const AxiosContext = createContext();

export default props => {
  const { setLoading } = useLoading();

  const get = async ({ url }) => {
    setLoading(true);
    try {
      const [instance, apiUrl] = resolveUrl(url);

      const { data } = await instance.get(apiUrl);

      return data;
    } catch (error) {
      const message = resolveError({ error });

      throw message;
    } finally {
      setLoading(false);
    }
  };

  const post = async ({ url, body }) => {
    setLoading(true);
    try {
      const [instance, apiUrl] = resolveUrl(url);

      const { data } = await instance.post(apiUrl, body);

      return data;
    } catch (error) {
      const message = resolveError({ error });

      throw message;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AxiosContext.Provider
      value={{
        get,
        post
      }}
      {...props}
    />
  );
};

export const useAxios = () => useContext(AxiosContext);

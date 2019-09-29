import React from 'react';
import { useLoading } from '../Providers/LoadingProvider';
import { resolveError } from '../resolvers/error.resolver';
import { resolveUrl } from '../resolvers/axios.resolver';

const useAxios = () => {
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

  return { get, post };
};

export default useAxios;

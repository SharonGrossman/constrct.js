import React from 'react';
import axios from 'axios';
import { useLoading } from '../Providers/LoadingProvider';
import { resolveError } from '../resolvers/error.resolver';

export const api = axios.create({
  baseURL: '/api',
  responseType: 'json'
});

export const auth = axios.create({
  baseURL: '/auth',
  responseType: 'json'
});

const useAxios = ({ instance }) => {
  const { setLoading } = useLoading();

  const get = async ({ url }) => {
    setLoading(true);
    try {
      const { data } = await instance.get(url);

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
      const { data } = await instance.post(url, body);

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

export const useApi = () => useAxios({ instance: api });
export const useAuth = () => useAxios({ instance: auth });

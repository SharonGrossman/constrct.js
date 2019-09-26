import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { useLoading } from '../LoadingProvider';

const AxiosContext = createContext();

const instances = {
  api: axios.create({
    baseURL: '/api',
    responseType: 'json'
  }),
  auth: axios.create({
    baseURL: '/auth',
    responseType: 'json'
  })
};

const resolveUrl = url => {
  const [, prefix, ...rest] = url.split('/');
  const api = [...rest].join('/');

  return [instances[prefix], api];
};

export default props => {
  const { setLoading } = useLoading();
  const { children } = props;

  const updateHeaderToken = token => {
    instances.api.defaults.headers.Authorization = `Bearer ${token}`;
  };

  const get = async ({ url }) => {
    setLoading(true);
    const [instance, apiUrl] = resolveUrl(url);

    try {
      const { data } = await instance.get(apiUrl);

      return data;
    } catch (error) {
      const {
        response: {
          data: { message }
        }
      } = error;

      throw message;
    } finally {
      setLoading(false);
    }
  };

  const post = async ({ url, body }) => {
    setLoading(true);
    const [instance, apiUrl] = resolveUrl(url);

    try {
      const { data } = await instance.post(apiUrl, body);

      return data;
    } catch (error) {
      const {
        response: {
          data: { message }
        }
      } = error;

      throw message;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AxiosContext.Provider value={{ get, post, updateHeaderToken }} {...props}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => useContext(AxiosContext);

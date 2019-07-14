import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthProvider';

const AxiosContext = createContext();

export const AxiosProvider = props => {
  const { getToken } = useAuth();

  const getAxiosClient = () => {
    const instance = axios.create({
      baseURL: '/api',
      responseType: 'json'
    });

    instance.interceptors.request.use(config => {
      const token = getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    return instance;
  };

  const getAxiosAuthClient = () =>
    axios.create({
      baseURL: '/auth',
      responseType: 'json'
    });

  return (
    <AxiosContext.Provider
      value={{ axiosAuthClient: getAxiosAuthClient(), axiosClient: getAxiosClient() }}
      {...props}
    />
  );
};

export const useAxios = () => useContext(AxiosContext);

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAxios } from '../AxiosProvider';
import { useAuth } from '../AuthProvider';

const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { token, getToken, setToken } = useAuth();
  const [authenticated, setAuthenticated] = useState(false);
  const { axiosAuthClient, axiosClient } = useAxios();

  const login = ({ email, password }) => {
    setLoading(true);
    return axiosAuthClient.post('/local', { email, password }).then(({ data }) => {
      setToken(data.token);
      setLoading(false);
    });
  };

  const loadUser = () => {
    setLoading(true);
    return axiosClient.get('/users/me').then(({ data: user }) => {
      setAuthenticated(true);
      setUser(user);
      setLoading(false);
    });
  };

  const setLoggedIn = () => {
    loadUser();
  };

  const setLoggedOut = () => {
    setAuthenticated(false);
    setUser({});
  };

  useEffect(() => {
    const action = token ? setLoggedIn : setLoggedOut;

    action();
  }, [token]);

  const register = () => axiosClient.post('/users').then(({ data }) => data);

  return <UserContext.Provider value={{ loading, authenticated, login, user, loadUser, register }} {...props} />;
};

export const useUser = () => useContext(UserContext);

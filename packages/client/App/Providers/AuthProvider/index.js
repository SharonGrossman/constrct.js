import React, { createContext, useContext, useEffect, useState } from 'react';
import {updateHeaderToken} from '../AxiosProvider';
const initialState = {token: null, user: null, authenticated: false, loading: false};
const AuthContext = createContext(initialState);

const getTokenFromLocalStorage = () => localStorage.getItem('token');
const setLocalStorageToken = token => {
  localStorage.setItem('token', token);
};

const removeTokenFromLocalStorage = () => localStorage.removeItem('token');

export const AuthProvider = props => {
  const [token, setToken] = useState(getTokenFromLocalStorage());
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateToken = token => {
    setToken(token);
    updateHeaderToken(token);
    if (token) {
      setLocalStorageToken(token);
    }
    else {
      removeTokenFromLocalStorage();
    }
  };

  useEffect(() => {
    if (!token) {
      setAuthenticated(false);
      setUser(null);
    }
  }, [token]);

  return <AuthContext.Provider value={{
    setAuthenticated,
    setUser,
    setLoading,
    loading,
    user,
    authenticated,
    token,
    updateToken
  }} {...props} />;
};

export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const getTokenFromLocalStorage = () => localStorage.getItem('token');
const setLocalStorageToken = token => {
  localStorage.setItem('token', token);
};

const removeTokenFromLocalStorage = () => localStorage.removeItem('token');

export const AuthProvider = props => {
  const [token, setToken] = useState(getTokenFromLocalStorage());

  const getToken = () => token;

  const clearAuth = () => {
    setToken(null);
  };

  useEffect(() => {
    if (token) {
      setLocalStorageToken(token);
    } else {
      removeTokenFromLocalStorage();
    }
  }, [token]);

  return <AuthContext.Provider value={{ clearAuth, token, setToken, getToken }} {...props} />;
};

export const useAuth = () => useContext(AuthContext);

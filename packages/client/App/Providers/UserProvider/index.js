import React, { createContext, useContext, useEffect, useState } from 'react';
import useAxios from '../../hooks/axios.hook';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setLocalStorage
} from '../../resolvers/localStorage.resolver';

const initialState = {
  user: null,
  authenticated: false
};

const UserContext = createContext(initialState);

export default props => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const { get } = useAxios();

  const authenticate = async () => {
    const data = await get({ url: '/api/users/me' });

    setUser(data);
    setAuthenticated(true);
  };

  const removeUser = () => {
    setUser(null);
    setAuthenticated(false);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        removeUser,
        authenticated,
        authenticate
      }}
      {...props}
    />
  );
};

export const useUser = () => useContext(UserContext);

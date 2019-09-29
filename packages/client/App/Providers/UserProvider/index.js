import React, { createContext, useContext, useEffect, useState } from 'react';
import useAxios from '../../hooks/axios.hook';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setLocalStorage
} from '../../resolvers/localStorage.resolver';

const initialState = {
  user: null
};

const UserContext = createContext(initialState);

export default props => {
  const [user, setUser] = useState(null);
  const { get } = useAxios();

  const fetchUser = async () => {
    const data = await get({ url: '/api/users/me' });

    setUser(data);
  };

  const removeUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        removeUser,
        fetchUser
      }}
      {...props}
    />
  );
};

export const useUser = () => useContext(UserContext);

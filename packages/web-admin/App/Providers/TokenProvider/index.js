import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from '../UserProvider';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setLocalStorage
} from '../../resolvers/localStorage.resolver';

const initialState = {
  token: null
};

const TokenContext = createContext(initialState);

export default props => {
  const [token, setToken] = useState(getFromLocalStorage({ key: 'token' }));
  const { fetchUser, removeUser } = useUser();

  const resolveToken = async token => {
    if (token) {
      setToken(token);
      setLocalStorage({ key: 'token', value: token });
      await fetchUser();

      return;
    }

    removeUser();
    setToken(token);
    removeFromLocalStorage({ key: 'token' });
  };

  const removeToken = () => resolveToken(null);

  useEffect(() => {
    resolveToken(token);
  }, []);

  return (
    <TokenContext.Provider
      value={{
        token,
        resolveToken,
        removeToken
      }}
      {...props}
    />
  );
};

export const useToken = () => useContext(TokenContext);

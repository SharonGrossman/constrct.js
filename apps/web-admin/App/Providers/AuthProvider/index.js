import React, { createContext, useContext, useEffect, useState } from 'react';
import useUserApi from '../../hooks/api/user.hook';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setLocalStorage
} from '../../resolvers/localStorage.resolver';

const initialState = {
  user: null
};

const AuthContext = createContext(initialState);

export default props => {
  const [user, setUser] = useState(null);
  const { getMyself } = useUserApi();

  const setAuth = async ({ token, user: newUser }) => {
    if (token) {
      setLocalStorage({ key: 'token', value: token });
      setUser(newUser);
    }
  };

  const setLoggedOut = () => {
    setUser(null);
    removeFromLocalStorage({ key: 'token' });
  };

  const getToken = () => getFromLocalStorage({ key: 'token' });
  const ensureAuthorized = () => getToken() || user;

  useEffect(() => {
    const resolveUser = async () => {
      const localToken = getToken();

      if (localToken) {
        const user = await getMyself();

        setUser(user);
      }
    };

    resolveUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        getToken,
        ensureAuthorized,
        setAuth,
        setLoggedOut
      }}
      {...props}
    />
  );
};

export const useAuth = () => useContext(AuthContext);

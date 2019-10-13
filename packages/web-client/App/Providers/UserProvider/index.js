import React, { createContext, useContext, useState } from 'react';
import useUserApi from '../../hooks/api/user.hook';

const initialState = {
  user: null
};

const UserContext = createContext(initialState);

export default props => {
  const [user, setUser] = useState(null);
  const { getMyself } = useUserApi();

  const fetchUser = async () => {
    const data = await getMyself();

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

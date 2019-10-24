import React, { useState, useEffect } from 'react';
import { Row } from 'mui-flex-layout';
import { useNotification } from '../../../Providers/NotificationProvider';
import useUserApi from '../../../hooks/api/user.hook';
import User from './User';

export default () => {
  const [users, setUsers] = useState([]);
  const { getAllUsers } = useUserApi();
  const { open } = useNotification();

  const fetchUsers = async () => {
    try {
      const users = await getAllUsers();

      setUsers(users);
    } catch (error) {
      open({ message: error });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Row
      justifyContent={'flex-start'}
      alignItems={'flex-start'}
      width={'100%'}
      height={'100%'}
      flexWrap={'wrap'}
    >
      {users.map(user => (
        <User key={user._id} user={user} />
      ))}
    </Row>
  );
};

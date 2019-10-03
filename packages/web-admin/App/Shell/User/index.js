import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Column } from 'mui-flex-layout';
import { useParams } from 'react-router';
import { useNotification } from '../../Providers/NotificationProvider';
import useUserApi from '../../hooks/api/user.hook';

export default () => {
  const [user, setUser] = useState({ name: { first: '', last: '' } });
  const { open } = useNotification();
  const { getUser } = useUserApi();
  const { id } = useParams();

  const fetchUser = async () => {
    try {
      const user = await getUser({ id });

      setUser(user);
    } catch (error) {
      open({ message: error });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Column width={'100%'} height={'10%'}>
      <Typography variant={'h3'}>{`${user.name.first} ${user.name.last}`}</Typography>
    </Column>
  );
};

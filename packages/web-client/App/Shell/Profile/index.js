import React from 'react';
import { Typography } from '@material-ui/core';
import { useUser } from '../../Providers/UserProvider';

export default () => {
  const { user } = useUser();

  return <Typography variant={'h3'}>{`Hello ${user.name.first} ${user.name.last}`}</Typography>;
};

import React from 'react';
import { Typography } from '@material-ui/core';
import { useAuth } from '../../Providers/AuthProvider';

export default () => {
  const { user } = useAuth();

  return <Typography variant={'h3'}>{`Hello ${user.name.first} ${user.name.last}`}</Typography>;
};

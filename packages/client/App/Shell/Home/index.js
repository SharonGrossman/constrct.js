import React from 'react';
import CourseList from './CourseList';
import { Typography } from '@material-ui/core';
import { useAuth } from '../../Providers/AuthProvider';
import { Column } from '../../components/Layout';

export default () => {
  const { user } = useAuth();

  return (
    <Column>
      <Typography variant={'h4'}>Hello {`${user.name.first} ${user.name.last}`}</Typography>
      <CourseList />
    </Column>
  );
};

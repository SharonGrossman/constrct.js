import React from 'react';
import { Typography } from '@material-ui/core';
import { Column } from 'mui-flex-layout';
import { useAuth } from '../../Providers/AuthProvider';
import CourseList from './CourseList';

export default () => {
  const { user } = useAuth();

  return (
    <Column>
      <Typography variant={'h4'}>{`Hello ${user.name.first} ${user.name.last}`}</Typography>
      <CourseList />
    </Column>
  );
};

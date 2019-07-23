import React  from 'react';
import CourseList from './CourseList';
import { Typography } from '@material-ui/core';
import { useAuth } from '../../Providers/AuthProvider';

export default () => {
  const {user} = useAuth();

  return (
    <>
      <Typography variant={'h4'}>Hello {`${user.name.first} ${user.name.last}`}</Typography>
      <CourseList />
    </>
  );
};

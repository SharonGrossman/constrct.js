import React, { memo, useState } from 'react';
import CourseList from './CourseList';
import { Typography } from '@material-ui/core';
import { useUser } from '../../Providers/UserProvider';

export default () => {
  const { user } = useUser();

  return (
    <>
      <Typography variant={'h4'}>Hello {`${user.name.first} ${user.name.last}`}</Typography>
      <CourseList />
    </>
  );
};

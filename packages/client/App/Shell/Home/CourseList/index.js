import React from 'react';
import Course from './Course';
import {Box} from '@material-ui/core';

const courses = [
  { _id: 1, name: 'Basic .NET' },
  { _id: 2, name: 'Advanced .NET' },
  { _id: 3, name: 'Infrastructure' },
  { _id: 4, name: 'Web Development' }
];

export default () => (
  <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'flex-start'} flexWrap={'wrap'}>
    {courses.map(course => (
      <Course
        key={course._id}
        course={course}

      />
    ))}
  </Box>
);
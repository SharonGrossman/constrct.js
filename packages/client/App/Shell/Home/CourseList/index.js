import React, { useState, useEffect } from 'react';
import Course from './Course';
import { Box } from '@material-ui/core';
import axios from 'axios';

export default () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/api/courses').then(({ data }) => {
      setCourses(data);
    });
  }, []);

  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'flex-start'}
      alignItems={'flex-start'}
      flexWrap={'wrap'}
    >
      {courses.map(course => (
        <Course key={course._id} course={course} />
      ))}
    </Box>
  );
};

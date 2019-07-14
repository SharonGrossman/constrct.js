import React, { useState, useEffect } from 'react';
import Course from './Course';
import RowContent from '../../../components/Layout/RowContent';
import axios from 'axios';

export default () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/api/courses').then(({ data }) => {
      setCourses(data);
    });
  }, []);

  return (
    <RowContent justifyContent={'flex-start'} alignItems={'flex-start'} flexWrap={'wrap'}>
      {courses.map(course => (
        <Course key={course._id} course={course} />
      ))}
    </RowContent>
  );
};

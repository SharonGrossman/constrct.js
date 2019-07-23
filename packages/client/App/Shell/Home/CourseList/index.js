import React, { useState, useEffect } from 'react';
import Course from './Course';
import RowContent from '../../../components/Layout/RowContent';
import { instance } from '../../../Providers/AxiosProvider';

export default () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    instance.get('/courses').then(({ data }) => {
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

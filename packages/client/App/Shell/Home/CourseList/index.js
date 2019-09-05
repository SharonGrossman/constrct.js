import React, { useState, useEffect } from 'react';
import Course from './Course';
import { Row } from 'mui-flex-layout';
import { instance } from '../../../services/axios.service';

export default () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    instance.get('/courses').then(({ data }) => {
      setCourses(data);
    });
  }, []);

  return (
    <Row justifyContent={'flex-start'} alignItems={'flex-start'} flexWrap={'wrap'}>
      {courses.map(course => (
        <Course key={course._id} course={course} />
      ))}
    </Row>
  );
};

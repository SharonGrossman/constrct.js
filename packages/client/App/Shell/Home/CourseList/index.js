import React, { useState, useEffect } from 'react';
import { Row } from 'mui-flex-layout';
import { instance } from '../../../services/axios.service';
import Course from './Course';

export default () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    instance.get('/courses').then(({ data }) => {
      setCourses(data);
    });
  }, []);

  return (
    <Row
      justifyContent={'flex-start'}
      alignItems={'flex-start'}
      width={'100%'}
      height={'100%'}
      flexWrap={'wrap'}
    >
      {courses.map(course => (
        <Course key={course._id} course={course} />
      ))}
    </Row>
  );
};

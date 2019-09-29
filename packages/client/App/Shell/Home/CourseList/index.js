import React, { useState, useEffect } from 'react';
import { Row } from 'mui-flex-layout';
import { useNotification } from '../../../Providers/NotificationProvider';
import useAxios from '../../../hooks/axios.hook';
import Course from './Course';

export default () => {
  const [courses, setCourses] = useState([]);
  const { get } = useAxios();
  const { open } = useNotification();

  const fetchCourses = async () => {
    try {
      const courses = await get({ url: '/api/courses' });

      setCourses(courses);
    } catch (error) {
      console.log(error);
      open({ message: error });
    }
  };

  useEffect(() => {
    fetchCourses();
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

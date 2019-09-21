import React, { useState, useEffect } from 'react';
import { Row } from 'mui-flex-layout';
import { useNotification } from '../../../Providers/NotificationProvider';
import { instance } from '../../../services/axios.service';
import Course from './Course';

export default () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const { open } = useNotification();

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const { data: courses } = await instance.get('/courses');

      setLoading(false);
      setCourses(courses);
    } catch (error) {
      const {
        response: {
          data: { message }
        }
      } = error;

      setLoading(false);
      open({ message });
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

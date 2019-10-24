import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Column } from 'mui-flex-layout';
import { useParams } from 'react-router';
import { useNotification } from '../../Providers/NotificationProvider';
import useCourseApi from '../../hooks/api/course.hook';

export default () => {
  const [course, setCourse] = useState({});
  const { open } = useNotification();
  const { getCourse } = useCourseApi();
  const { id } = useParams();

  const fetchCourse = async () => {
    try {
      const course = await getCourse({ id });

      setCourse(course);
    } catch (error) {
      open({ message: error });
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <Column width={'100%'} height={'10%'}>
      <Typography variant={'h3'}>{course.name}</Typography>
    </Column>
  );
};

import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Column } from 'mui-flex-layout';
import { useParams } from 'react-router';
import { useNotification } from '../../Providers/NotificationProvider';
import { useAxios } from '../../Providers/AxiosProvider';

export default () => {
  const [course, setCourse] = useState({});
  const { open } = useNotification();
  const { get } = useAxios();
  const { id } = useParams();

  const fetchCourse = async () => {
    try {
      const course = await get({ url: `/api/courses/${id}` });

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

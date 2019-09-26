import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Column } from 'mui-flex-layout';
import { useNotification } from '../../Providers/NotificationProvider';
import { useAxios } from '../../Providers/AxiosProvider';

export default ({
  match: {
    params: { id }
  }
}) => {
  const [course, setCourse] = useState({});
  const { open } = useNotification();
  const { get } = useAxios();

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

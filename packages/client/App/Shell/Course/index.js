import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Column } from 'mui-flex-layout';
import { useNotification } from '../../Providers/NotificationProvider';
import { instance } from '../../services/axios.service';

export default ({
  match: {
    params: { id }
  }
}) => {
  const [course, setCourse] = useState({});
  const { open } = useNotification();
  const [loading, setLoading] = useState(false);

  const fetchCourse = async () => {
    setLoading(true);

    try {
      instance.get(`/courses/${id}`).then(({ data: course }) => {
        setLoading(false);
        setCourse(course);
      });
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
    fetchCourse();
  }, []);

  return (
    <Column width={'100%'} height={'10%'}>
      <Typography variant={'h3'}>{course.name}</Typography>
    </Column>
  );
};

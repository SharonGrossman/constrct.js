import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Column } from 'mui-flex-layout';
import { instance } from '../../services/axios.service';

export default ({
  match: {
    params: { id }
  }
}) => {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    instance.get(`/courses/${id}`).then(({ data: course }) => {
      setLoading(false);
      setCourse(course);
    });
  }, []);

  return (
    <Column width={'100%'} height={'10%'}>
      <Typography variant={'h3'}>{course.name}</Typography>
    </Column>
  );
};

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, List, ListItem, ListItemText, ListItemIcon, Checkbox } from '@material-ui/core';

export default ({
  match: {
    params: { id }
  }
}) => {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/courses/${id}`).then(({ data }) => {
      setLoading(false);
      console.log(data);
      setCourse(data);
    });
  }, []);

  return (
    <List>
      <Box width={'100%'} height={'10%'} flexDirection={'column'}>
        {loading ? (
          <span>Loading!!!</span>
        ) : (
          course.tasks &&
          course.tasks.map(task => (
            <ListItem key={task._id} button>
              <ListItemIcon>
                <Checkbox edge="start" checked={false} tabIndex={-1} disableRipple />
              </ListItemIcon>
              <ListItemText id={id} primary={`${task.name}`} secondary={`duration: ${task.duration}`} />
            </ListItem>
          ))
        )}
      </Box>
    </List>
  );
};

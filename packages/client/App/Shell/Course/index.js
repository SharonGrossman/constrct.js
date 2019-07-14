import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, List, ListItem, ListItemText, ListItemIcon, Button } from '@material-ui/core';
import { withRouter } from 'react-router';

const Course = ({
  match: {
    params: { id },
    path
  },
  history
}) => {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setLoading(true);
    Promise.all([axios.get(`/api/courses/${id}`), axios.get(`/api/tasks/c/${id}`)]).then(
      ([{ data: course }, { data: tasks }]) => {
        setLoading(false);
        setCourse(course);
        setTasks(tasks);
      }
    );
  }, []);

  const handleClick = id => {
    history.push(`/task/${id}`);
  };

  return (
    <Box width={'100%'} height={'10%'} flexDirection={'column'}>
      <List>
        {loading ? (
          <span>Loading!!!</span>
        ) : (
          tasks.map(task => (
            <ListItem key={task._id} button onClick={() => handleClick(task._id)}>
              <ListItemIcon></ListItemIcon>
              <ListItemText id={id} primary={`${task.name}`} secondary={`duration: ${task.duration}`} />
            </ListItem>
          ))
        )}
      </List>
    </Box>
  );
};

export default withRouter(Course);

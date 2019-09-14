import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

export default ({ task, onClick }) => {
  const itemClicked = () => {
    onClick(task._id);
  };

  return (
    <ListItem key={task._id} button onClick={itemClicked}>
      <ListItemText primary={`${task.name}`} secondary={`duration: ${task.duration}`} />
    </ListItem>
  );
};

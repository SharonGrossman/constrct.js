import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, List, ListItem, ListItemText, ListItemIcon, Checkbox } from '@material-ui/core';

export default ({
  match: {
    params: { id }
  }
}) => {
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/tasks/${id}`).then(({ data }) => {
      setLoading(false);
      setTask(data);
    });
  }, []);

  return loading ? <span>Loading!!</span> : <span>Hi task {task.name}</span>;
};

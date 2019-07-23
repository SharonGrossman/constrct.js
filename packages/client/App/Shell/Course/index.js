import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { withRouter } from 'react-router';
import { instance } from '../../Providers/AxiosProvider';
import ColumnContent from '../../components/Layout/ColumnContent';

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
    Promise.all([instance.get(`/courses/${id}`), instance.get(`/tasks/c/${id}`)]).then(
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
    <ColumnContent width={'100%'} height={'10%'}>
      <List>
        {loading ? (
          <span>Loading!!!</span>
        ) : (
          tasks.map(task => (
            <ListItem key={task._id} button onClick={() => handleClick(task._id)}>
              <ListItemText id={id} primary={`${task.name}`} secondary={`duration: ${task.duration}`} />
            </ListItem>
          ))
        )}
      </List>
    </ColumnContent>
  );
};

export default withRouter(Course);

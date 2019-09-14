import React, { useState, useEffect } from 'react';
import { List } from '@material-ui/core';
import { Column } from 'mui-flex-layout';
import { instance } from '../../services/axios.service';
import { useHistory } from '../../Providers/HistoryProvider';
import CourseItem from './components/CourseItem';

export default ({
  match: {
    params: { id }
  }
}) => {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const { navigate } = useHistory();

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
    navigate(`/task/${id}`);
  };

  return (
    <Column width={'100%'} height={'10%'}>
      <List>
        {loading ? (
          <span>{'Loading'}</span>
        ) : (
          tasks.map(task => <CourseItem key={task._id} task={task} onClick={handleClick} />)
        )}
      </List>
    </Column>
  );
};

import React, { useState, useEffect } from 'react';
import { instance } from '../../services/axios.service';

export default ({
  match: {
    params: { id }
  }
}) => {
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    instance.get(`/tasks/${id}`).then(({ data }) => {
      setLoading(false);
      setTask(data);
    });
  }, []);

  return loading ? <span>{'Loading!!'}</span> : <span>{`Hi task ${task.name}`}</span>;
};

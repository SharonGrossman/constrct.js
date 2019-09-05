import React, { useState, useEffect } from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { Column, Padded } from 'mui-flex-layout';
import { useAuth } from '../../Providers/AuthProvider';
import { login } from './login.service';
import { loadUser } from '../../services/auth.service';
import LoginForm from '../components/LoginForm';
import LinkButton from '../../components/LinkButton';
import { useHistory } from '../../Providers/HistoryProvider';
import { useNotification } from '../../Providers/NotificationProvider';

export default () => {
  const { setAuthenticated, setUser, updateToken } = useAuth();
  const { open } = useNotification();
  const [loading, setLoading] = useState(false);
  const { navigate } = useHistory();

  const handleLogin = ({ email, password }, { setSubmitting }) => {
    setLoading(true);
    return login({ email, password })
      .then(updateToken)
      .then(loadUser)
      .then(setUser)
      .then(() => {
        setAuthenticated(true);
        setLoading(false);
        navigate('/');
      })
      .catch(({ response: { data: { message } } }) => {
        setLoading(false);
        setSubmitting(false);
        open({ message });
      });
  };

  return (
    <Column width={'100%'} height={'75%'} justifyContent={'center'} alignItems={'center'}>
      <Padded padding={3}>
        <Typography variant={'h4'}>{'Login to Continue'}</Typography>
      </Padded>
      <LoginForm handleSubmit={handleLogin} />
      <Padded>
        <LinkButton to={'/register'} message={'or create an account'} p={1} color={'secondary'} />
      </Padded>
      {loading && <CircularProgress size={64} color={'secondary'} />}
    </Column>
  );
};

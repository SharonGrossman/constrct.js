import React, { useState } from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { Column, Padded } from 'mui-flex-layout';
import { useAuth } from '../../Providers/AuthProvider';
import { loadUser } from '../../services/auth.service';
import RegisterForm from '../components/RegisterForm';
import LinkButton from '../../components/LinkButton';
import { useHistory } from '../../Providers/HistoryProvider';
import { useNotification } from '../../Providers/NotificationProvider';
import { register } from './register.service';

export default () => {
  const { setAuthenticated, setUser, updateToken } = useAuth();
  const { open } = useNotification();
  const [loading, setLoading] = useState(false);
  const { navigate } = useHistory();

  const handleRegister = async ({ email, password, name }, { setSubmitting }) => {
    setLoading(true);
    try {
      const token = await register({ email, password, name });

      updateToken(token);
      const user = await loadUser();

      setUser(user);
      setAuthenticated(true);
      setLoading(false);
      navigate('/');
    } catch (error) {
      const {
        response: {
          data: { message }
        }
      } = error;

      setLoading(false);
      setSubmitting(false);
      open({ message });
    }
  };

  return (
    <Column width={'100%'} height={'75%'} justifyContent={'center'} alignItems={'center'}>
      <Padded padding={3}>
        <Typography variant={'h4'}>{'Register to view content'}</Typography>
      </Padded>
      <RegisterForm handleSubmit={handleRegister} />
      <Padded>
        <LinkButton to={'/login'} message={'or Go back to Login'} p={1} color={'secondary'} />
      </Padded>
      {loading && <CircularProgress size={64} color={'secondary'} />}
    </Column>
  );
};

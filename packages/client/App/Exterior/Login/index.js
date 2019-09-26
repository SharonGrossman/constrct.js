import React from 'react';
import { Typography } from '@material-ui/core';
import { Column, Padded } from 'mui-flex-layout';
import { useAuth } from '../../Providers/AuthProvider';
import LinkButton from '../../components/LinkButton';
import { useHistory } from '../../Providers/HistoryProvider';
import { useNotification } from '../../Providers/NotificationProvider';
import { useAxios } from '../../Providers/AxiosProvider';
import LoginForm from './LoginForm';

export default () => {
  const { setAuthenticated, setUser, updateToken } = useAuth();
  const { open } = useNotification();
  const { navigate } = useHistory();
  const { get, post } = useAxios();

  const handleLogin = async ({ email, password }, { setSubmitting }) => {
    try {
      const { token } = await post({ url: '/auth/local', body: { email, password } });

      updateToken(token);
      const user = await get({ url: '/api/users/me' });

      setUser(user);
      setAuthenticated(true);
      navigate('/');
    } catch (error) {
      setSubmitting(false);

      open({ message: error });
    }
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
    </Column>
  );
};

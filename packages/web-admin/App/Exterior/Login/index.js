import React from 'react';
import { Typography } from '@material-ui/core';
import { Column, Padded } from 'mui-flex-layout';
import { useHistory } from 'react-router';
import useAuthApi from '../../hooks/api/auth.hook';
import { useNotification } from '../../Providers/NotificationProvider';
import { useToken } from '../../Providers/TokenProvider';
import LoginForm from './LoginForm';

export default () => {
  const { open } = useNotification();
  const { push } = useHistory();
  const { resolveToken } = useToken();
  const { login } = useAuthApi();

  const handleLogin = async ({ email, password }, { setSubmitting }) => {
    try {
      const token = await login({ email, password });

      resolveToken(token);

      push('/');
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
    </Column>
  );
};

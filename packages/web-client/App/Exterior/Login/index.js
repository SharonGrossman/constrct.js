import React from 'react';
import { Typography } from '@material-ui/core';
import { Column, Padded } from 'mui-flex-layout';
import { useHistory } from 'react-router';
import LinkButton from '../../components/LinkButton';
import useAuthApi from '../../hooks/api/auth.hook';
import { useNotification } from '../../Providers/NotificationProvider';
import { useToken } from '../../Providers/TokenProvider';
import LoginForm from './LoginForm';

export default () => {
  const { open } = useNotification();
  const { push } = useHistory();
  const { login } = useAuthApi();
  const { resolveToken } = useToken();

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
      <Padded>
        <LinkButton to={'/register'} message={'or create an account'} p={1} color={'secondary'} />
      </Padded>
    </Column>
  );
};

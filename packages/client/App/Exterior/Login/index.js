import React from 'react';
import { Typography } from '@material-ui/core';
import { Column, Padded } from 'mui-flex-layout';
import { useHistory } from 'react-router';
import { useAuth } from '../../Providers/AuthProvider';
import LinkButton from '../../components/LinkButton';
import { useAxios } from '../../Providers/AxiosProvider';
import { useNotification } from '../../Providers/NotificationProvider';
import LoginForm from './LoginForm';

export default () => {
  const { resolveToken } = useAuth();
  const { open } = useNotification();
  const { push } = useHistory();
  const { post } = useAxios();

  const handleLogin = async ({ email, password }, { setSubmitting }) => {
    try {
      const { token } = await post({ url: '/auth/local', body: { email, password } });

      await resolveToken(token);
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

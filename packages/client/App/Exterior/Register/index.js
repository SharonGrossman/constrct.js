import React from 'react';
import { Typography } from '@material-ui/core';
import { Column, Padded } from 'mui-flex-layout';
import { useAuth } from '../../Providers/AuthProvider';
import { useAxios } from '../../Providers/AxiosProvider';
import LinkButton from '../../components/LinkButton';
import { useHistory } from '../../Providers/HistoryProvider';
import { useNotification } from '../../Providers/NotificationProvider';
import RegisterForm from './RegisterForm';

export default () => {
  const { resolveToken } = useAuth();
  const { open } = useNotification();
  const { navigate } = useHistory();
  const { post } = useAxios();

  const handleRegister = async ({ email, password, name }, { setSubmitting }) => {
    try {
      const { token } = await post({ url: '/api/users', body: { email, password, name } });

      resolveToken(token);
      navigate('/');
    } catch (error) {
      setSubmitting(false);
      open({ message: error });
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
    </Column>
  );
};

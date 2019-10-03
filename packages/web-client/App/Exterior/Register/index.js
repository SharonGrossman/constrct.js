import React from 'react';
import { Typography } from '@material-ui/core';
import { Column, Padded } from 'mui-flex-layout';
import { useHistory } from 'react-router';
import useUserApi from '../../hooks/api/user.hook';
import LinkButton from '../../components/LinkButton';
import { useNotification } from '../../Providers/NotificationProvider';
import { useToken } from '../../Providers/TokenProvider';
import RegisterForm from './RegisterForm';

export default () => {
  const { open } = useNotification();
  const { push } = useHistory();
  const { createUser } = useUserApi();
  const { resolveToken } = useToken();

  const handleRegister = async ({ email, password, name }, { setSubmitting }) => {
    try {
      const token = await createUser({ email, password, name });

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
        <Typography variant={'h4'}>{'Register to view content'}</Typography>
      </Padded>
      <RegisterForm handleSubmit={handleRegister} />
      <Padded>
        <LinkButton to={'/login'} message={'or Go back to Login'} p={1} color={'secondary'} />
      </Padded>
    </Column>
  );
};

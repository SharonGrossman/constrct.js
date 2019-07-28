import React, { useState, useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';
import BorderedContent from '../components/BorderedContent';
import { Column, Padded } from '../../components/Layout';
import { useAuth } from '../../Providers/AuthProvider';
import { login } from './login.service';
import { loadUser } from '../../services/auth.service';
import FormHeader from '../components/FormHeader';
import LoginForm from '../components/LoginForm';
import NotificationSnackbar from '../../components/NotificationSnackbar';
import LinkButton from '../../components/LinkButton';

export default ({ history }) => {
  const { setAuthenticated, setUser, updateToken } = useAuth();
  const [opened, setOpened] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpened(false);
    setError(null);
  };

  useEffect(() => {
    setOpened(!!error);
  }, [error]);

  const handleLogin = ({ email, password }, { setSubmitting }) => {
    setLoading(true);
    return login({ email, password })
      .then(updateToken)
      .then(loadUser)
      .then(setUser)
      .then(() => {
        setAuthenticated(true);
        setLoading(false);
        history.push('/');
      })
      .catch(({ response: { data: { message } } }) => {
        setError(message);
        setLoading(false);
        setSubmitting(false);
      });
  };

  return (
    <BorderedContent width={'25%'}>
      <Column width={'100%'} height={'80%'} justifyContent={'center'} alignItems={'center'}>
        <FormHeader title={'Sign in'} />
        {loading && <LinearProgress color={'secondary'} />}
        <LoginForm handleSubmit={handleLogin} />
        <Padded>
          <LinkButton to={'/register'} message={'Create an account'} p={1} color={'secondary'} />
        </Padded>
      </Column>
      {opened && <NotificationSnackbar opened={opened} message={error} handleClose={handleClose} />}
    </BorderedContent>
  );
};

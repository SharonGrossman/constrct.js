import React, { useState, useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';
import BorderedContent from '../components/BorderedContent';
import FormHeader from '../components/FormHeader';
import { Column, Padded } from '../../components/Layout';
import { useAuth } from '../../Providers/AuthProvider';
import { register } from './register.service';
import { loadUser } from '../../services/auth.service';
import RegisterForm from '../components/RegisterForm';
import LinkButton from '../../components/LinkButton';
import NotificationSnackbar from '../../components/NotificationSnackbar';

export default ({ history }) => {
  const { setAuthenticated, setUser, updateToken } = useAuth();
  const [opened, setOpened] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setOpened(!!error);
  }, [error]);

  const handleClose = () => {
    setOpened(false);
    setError(null);
  };

  const handleRegister = ({ email, password, name }, { setSubmitting }) => {
    setLoading(true);
    register({ email, password, name })
      .then(updateToken)
      .then(loadUser)
      .then(user => {
        setUser(user);
        setAuthenticated(true);
        setLoading(false);
        history.push('/');
      })
      .catch(({ response: { data: { message } } }) => {
        setLoading(false);
        setSubmitting(false);
        setError(message);
      });
  };

  return (
    <BorderedContent width={'25%'}>
      <Column width={'100%'} height={'80%'} justifyContent={'center'} alignItems={'center'}>
        <FormHeader title={'Create an account'} />
        {loading && <LinearProgress color={'secondary'} />}
        <RegisterForm handleSubmit={handleRegister} />
        <Padded>
          <LinkButton color={'secondary'} message={'Back to login'} to={'/login'} />
        </Padded>
      </Column>
      {opened && <NotificationSnackbar opened={opened} message={error} handleClose={handleClose} />}
    </BorderedContent>
  );
};

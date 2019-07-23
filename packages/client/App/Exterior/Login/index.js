import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';
import RowContent from '../../components/Layout/RowContent';
import ColumnContent from '../../components/Layout/ColumnContent';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Providers/AuthProvider';
import { instance, authInstance } from '../../Providers/AxiosProvider';
import { School } from '@material-ui/icons';
import { useTheme } from '@material-ui/styles';

const BorderedColumnContent = styled(ColumnContent)`
  border: 1px solid #00d2c7 0.85;
  background-color: cyan;
  border-radius: 6px;
  opacity: 0.92;
`;

const SchoolLogo = styled(School)`
  font-size: 30px !important;
`;

export default ({ history }) => {
  const { setAuthenticated, setUser, setLoading, updateToken } = useAuth();
  const {
    palette: {
      secondary: { main }
    }
  } = useTheme();

  const loadUser = () => {
    setLoading(true);
    return instance.get('/users/me').then(({ data: user }) => {
      setUser(user);
      setAuthenticated(true);
      setLoading(false);
    });
  };

  const handleLogin = () => {
    setLoading(true);
    return authInstance
      .post('/local', { email: 'rick@gmail.com', password: '123456789' })
      .then(({ data }) => {
        updateToken(data.token);
        setLoading(false);
      })
      .then(loadUser)
      .then(() => {
        history.push('/');
      });
  };

  const HeaderTitle = styled(RowContent)`
    background-color: ${main};
    border-radius: 6px 6px 0 0;
  `;

  return (
    <BorderedColumnContent width={'25%'} height={'40%'}>
      <ColumnContent width={'100%'} height={'80%'} flexGrow={1}>
        <HeaderTitle width={'100%'} height={'25%'} alignItems={'center'}>
          <RowContent p={2} flexGrow={1}>
            <Typography variant={'h5'}>{'Login'}</Typography>
          </RowContent>
          <RowContent p={2} alignItems={'flex-end'}>
            <SchoolLogo />
          </RowContent>
        </HeaderTitle>
        <ColumnContent p={1}>
          <TextField label="Email" />
          <TextField label="Password" />
        </ColumnContent>
      </ColumnContent>
      <ColumnContent p={2} justifyContent={'center'} alignItems={'center'}>
        <RowContent p={1}>
          <Button onClick={handleLogin} variant={'contained'}>
            {'Login'}
          </Button>
        </RowContent>
        <RowContent>
          <Button component={Link} to={'/register'} p={1} color={'secondary'}>
            {'Create an account'}
          </Button>
        </RowContent>
      </ColumnContent>
    </BorderedColumnContent>
  );
};

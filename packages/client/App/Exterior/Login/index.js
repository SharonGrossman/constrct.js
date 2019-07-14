import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useUser } from '../../Providers/UserProvider';

const AreaBox = styled(Box)`
  border: 1px solid #00d2c7;
  border-radius: 6px;
`;

export default ({ history }) => {
  const { login, loadUser } = useUser();
  const handleLogin = () => {
    login({ email: 'rick@gmail.com', password: '123456789' })
      .then(loadUser)
      .then(() => {
        history.push('/');
      });
  };

  return (
    <AreaBox p={2} display={'flex'} flexDirection={'column'} width={'30%'} height={'30%'}>
      <Box display={'flex'} flexDirection={'column'} width={'100%'} height={'80%'} flexGrow={1}>
        <TextField label="Email" />
        <TextField label="Password" />
      </Box>
      <Box p={1} flexDirection={'row'} display={'flex'} alignItems={'flex-end'} justifyContent={'center'}>
        <Button onClick={handleLogin} variant={'contained'}>
          Login
        </Button>
        <Button component={Link} to={'/register'} variant={'outlined'} color={'secondary'}>
          {'Register'}
        </Button>
      </Box>
    </AreaBox>
  );
};

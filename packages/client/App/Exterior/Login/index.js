import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const AreaBox = styled(Box)`
  border: 1px solid #00d2c7;
  border-radius: 6px;
`;

export default () => (
  <AreaBox p={2} display={'flex'} flexDirection={'column'} width={'30%'} height={'30%'}>
    <Box display={'flex'} flexDirection={'column'} width={'100%'} height={'80%'} flexGrow={1}>
      <TextField label="Email" />
      <TextField label="Password" />
    </Box>
    <Box p={1} flexDirection={'row'} display={'flex'} alignItems={'flex-end'} justifyContent={'center'}>
      <Button variant={'contained'}>Login</Button>
      <Button component={Link} to={'/register'} variant={'outlined'} color={'secondary'}>
        {'Register'}
      </Button>
    </Box>
  </AreaBox>
);

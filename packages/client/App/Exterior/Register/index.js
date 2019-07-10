import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import styled from 'styled-components';
import { SchoolOutlined } from '@material-ui/icons';
import {Link} from 'react-router-dom';

const AreaBox = styled(Box)`
  border: 1px solid #00d2c7;
  border-radius: 6px;
`;
const SchoolLogo = styled(SchoolOutlined)`
  font-size: 110px !important;
`;

export default () => (
  <AreaBox p={2} display={'flex'} flexDirection={'column'} width={'30%'} height={'30%'}>
    <Box display={'flex'} flexDirection={'column'} width={'100%'} height={'80%'} flexGrow={1}>
      <TextField label="Email" />
      <TextField label="Password" />
    </Box>
    <Box p={1} flexDirection={'row'} display={'flex'} alignItems={'flex-end'} justifyContent={'center'}>
      <Button variant={'contained'}>{'Create an account'}</Button>
      <Button component={Link} to={'/login'} variant={'outlined'} color={'secondary'}>{'Go Back'}</Button>
    </Box>
  </AreaBox>
);

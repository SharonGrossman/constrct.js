import React from 'react';
import { Box, Button, Typography, TextField } from '@material-ui/core';
import styled from 'styled-components';
import { SchoolOutlined } from '@material-ui/icons';

const StyledBox = styled(Box)`
  background-color: #336b9c;
`;

const AreaBox = styled(Box)`
  border: 1px solid #00d2c7;
  border-radius: 6px;
`;
const SchoolLogo = styled(SchoolOutlined)`
  font-size: 110px !important;
`;

export default () => (
  <Box display={'flex'} width={'100%'} flexDirection={'row'}>
    <StyledBox flexDirection={'column'} display={'flex'} width={'50%'} justifyContent={'center'} alignItems={'center'}>
      <SchoolLogo />
      <Typography variant={'h5'}>{'makmacademy'}</Typography>
    </StyledBox>
    <Box flexDirection={'column'} display={'flex'} width={'50%'} justifyContent={'center'} alignItems={'center'}>
      <AreaBox p={2} display={'flex'} flexDirection={'column'} width={'30%'} height={'30%'}>
        <Box display={'flex'} flexDirection={'column'} width={'100%'} height={'80%'} flexGrow={1}>
          <TextField label="Email" />
          <TextField label="Password" />
        </Box>
        <Box p={1} flexDirection={'row'} display={'flex'} alignItems={'flex-end'} justifyContent={'center'}>
          <Button variant={'contained'}>Login</Button>
          <Button variant={'outlined'} color={'secondary'}>
            Register
          </Button>
        </Box>
      </AreaBox>
    </Box>
  </Box>
);

import React from 'react';
import { Box, Button, Typography, TextField } from '@material-ui/core';
import styled from 'styled-components';
import { SchoolOutlined } from '@material-ui/icons';

const StyledBox = styled(Box)`
  background-color: #336b9c;
`;

const SchoolLogo = styled(SchoolOutlined)`
  font-size: 110px !important;
`;

export default ({children}) => (
  <Box display={'flex'} width={'100%'} flexDirection={'row'}>
    <StyledBox flexDirection={'column'} display={'flex'} width={'50%'} justifyContent={'center'} alignItems={'center'}>
      <SchoolLogo />
      <Typography variant={'h5'}>{'makmacademy'}</Typography>
    </StyledBox>
    <Box flexDirection={'column'} display={'flex'} width={'50%'} justifyContent={'center'} alignItems={'center'}>
      {children}
    </Box>
  </Box>
);

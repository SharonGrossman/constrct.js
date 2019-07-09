import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@material-ui/core';
import { SchoolOutlined as Logo } from '@material-ui/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogo = styled(Logo)`
  margin: 8px;
`;

export default () => (
  <AppBar color={'primary'}>
    <Toolbar variant={'dense'}>
      <Box display={'flex'} width={'100%'} flexDirection={'row'}>
        <Box display={'flex'} flexGrow={1} p={1} flexDirection={'row'}>
          <StyledLogo />
          <Typography variant={'h6'}>{'Academy'}</Typography>
        </Box>
        <Box display={'flex'} p={1} justifyContent={'flex-end'}>
          <Button color={'secondary'} variant={'contained'} component={Link} to={'/login'}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
);

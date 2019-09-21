import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@material-ui/core';
import {
  LocalShipping as Logo,
  ExitToApp as LogoutIcon,
  InvertColors as ThemeToggleIcon
} from '@material-ui/icons';
import styled from 'styled-components';
import { Row } from 'mui-flex-layout';
import { useAuth } from '../../Providers/AuthProvider';
import { useTheme } from '../../Providers/ThemeProvider';
import { useHistory } from '../../Providers/HistoryProvider';

const ClickableTitle = styled(Typography)`
  cursor: pointer;
`;
const ConstrctLogo = styled(Logo)`
  margin: 5px;
`;

export default () => {
  const { removeToken } = useAuth();
  const { toggleTheme } = useTheme();
  const { navigate } = useHistory();

  const handleLogout = () => {
    removeToken();
  };

  const handleTitleClick = () => {
    navigate('/');
  };

  const handleTheme = () => {
    toggleTheme();
  };

  return (
    <AppBar position={'static'} color={'inherit'}>
      <Toolbar variant={'dense'}>
        <Row width={'100%'}>
          <Row flexGrow={1} p={1} justifyContent={'start'} alignItems={'center'}>
            <ConstrctLogo />
            <ClickableTitle onClick={handleTitleClick} variant={'h6'}>
              {'Constrct.js'}
            </ClickableTitle>
          </Row>
          <Row p={1} justifyContent={'flex-end'}>
            <Tooltip title={'Toggle Theme'}>
              <IconButton onClick={handleTheme} color={'secondary'}>
                <ThemeToggleIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={'Logout'}>
              <IconButton onClick={handleLogout} color={'secondary'}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Row>
        </Row>
      </Toolbar>
    </AppBar>
  );
};

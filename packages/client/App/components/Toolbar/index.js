import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@material-ui/core';
import {
  ExitToApp as LogoutIcon,
  InvertColors as ThemeToggleIcon,
  AccountCircle as ProfileIcon,
  SupervisedUserCircle as AdminIcon
} from '@material-ui/icons';
import styled from 'styled-components';
import { Row } from 'mui-flex-layout';
import { useHistory } from 'react-router';
import AppIcon from '../AppIcon';
import useAuth from '../../hooks/auth.hook';
import { useTheme } from '../../Providers/ThemeProvider';

const ClickableTitle = styled(Typography)`
  cursor: pointer;
`;
const MarginAppIcon = styled(AppIcon)`
  margin: 5px;
`;

export default () => {
  const { logout } = useAuth();
  const { toggleTheme } = useTheme();
  const { push } = useHistory();

  const handleLogout = () => {
    logout();
  };

  const handleTitleClick = () => {
    push('/');
  };

  const handleAdmin = () => {
    push('/admin');
  };

  const handleTheme = () => {
    toggleTheme();
  };

  const handleProfile = () => {
    push('/profile');
  };

  return (
    <AppBar position={'static'} color={'primary'}>
      <Toolbar variant={'dense'}>
        <Row width={'100%'}>
          <Row flexGrow={1} p={1} justifyContent={'start'} alignItems={'center'}>
            <MarginAppIcon />
            <ClickableTitle onClick={handleTitleClick} variant={'h6'}>
              {'Constrct.js'}
            </ClickableTitle>
          </Row>
          <Row p={1} justifyContent={'flex-end'}>
            <Tooltip title={'Profile'}>
              <IconButton onClick={handleProfile} color={'inherit'}>
                <ProfileIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={'Admin'}>
              <IconButton onClick={handleAdmin} color={'inherit'}>
                <AdminIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={'Toggle Theme'}>
              <IconButton onClick={handleTheme} color={'inherit'}>
                <ThemeToggleIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={'Logout'}>
              <IconButton onClick={handleLogout} color={'inherit'}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Row>
        </Row>
      </Toolbar>
    </AppBar>
  );
};

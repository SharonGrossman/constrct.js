import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@material-ui/core';
import { SchoolOutlined as Logo, ExitToApp as LogoutIcon } from '@material-ui/icons';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { useAuth } from '../../Providers/AuthProvider';
import { useUser } from '../../Providers/UserProvider';
import RowContent from '../Layout/RowContent';

const ClickableTitle = styled(Typography)`
  cursor: pointer;
`;
const AcademyLogo = styled(Logo)`
  margin: 5px;
`;

const Header = ({ history }) => {
  const { clearAuth } = useAuth();
  const { authenticated } = useUser();

  const handleLogout = () => {
    clearAuth();
  };

  const handleTitleClick = () => {
    history.push('/');
  };

  return (
    <AppBar color={'primary'}>
      <Toolbar variant={'dense'}>
        <RowContent width={'100%'}>
          <RowContent flexGrow={1} p={1} justifyContent={'start'} alignItems={'center'}>
            <AcademyLogo />
            <ClickableTitle onClick={handleTitleClick} variant={'h6'}>
              {'Academy'}
            </ClickableTitle>
          </RowContent>
          <RowContent p={1} justifyContent={'flex-end'}>
            <Tooltip title={'Logout'}>
              <IconButton onClick={handleLogout} color={'secondary'}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </RowContent>
        </RowContent>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);

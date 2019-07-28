import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@material-ui/core';
import { SchoolOutlined as Logo, ExitToApp as LogoutIcon } from '@material-ui/icons';
import styled from 'styled-components';
import { push } from '../../services/history.service';
import { useAuth } from '../../Providers/AuthProvider';
import { Row } from '../Layout';

const ClickableTitle = styled(Typography)`
  cursor: pointer;
`;
const AcademyLogo = styled(Logo)`
  margin: 5px;
`;

export default () => {
  const { updateToken } = useAuth();

  const handleLogout = () => {
    updateToken(null);
  };

  const handleTitleClick = () => {
    push({ url: '/' });
  };

  return (
    <AppBar color={'primary'}>
      <Toolbar variant={'dense'}>
        <Row width={'100%'}>
          <Row flexGrow={1} p={1} justifyContent={'start'} alignItems={'center'}>
            <AcademyLogo />
            <ClickableTitle onClick={handleTitleClick} variant={'h6'}>
              {'Academy'}
            </ClickableTitle>
          </Row>
          <Row p={1} justifyContent={'flex-end'}>
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

import React from 'react';
import styled from 'styled-components';
import { Row, Column, Padded } from 'mui-flex-layout';
import { Typography } from '@material-ui/core';
import AppIcon from '../components/AppIcon';

const BiggerAppIcon = styled(AppIcon)`
  font-size: 150px !important;
`;

export default ({ children }) => (
  <Row width={'100%'} height={'100%'}>
    <Column width={'100%'} height={'75%'} justifyContent={'center'} alignItems={'center'}>
      <Typography variant={'h3'}>{'Constrct.js'}</Typography>
      <Padded>
        <Typography variant={'body1'}>{' style application stack'}</Typography>
      </Padded>
      <BiggerAppIcon />
    </Column>
    <hr />
    <Column width={'100%'} height={'100%'}>
      {children}
    </Column>
  </Row>
);

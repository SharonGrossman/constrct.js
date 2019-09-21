import React from 'react';
import styled from 'styled-components';
import { Row, Column, Padded } from 'mui-flex-layout';
import { LocalShipping } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const logoSize = '150px !important';

const Construct = styled(LocalShipping)`
  font-size: ${logoSize};
`;

export default ({ children }) => (
  <Row width={'100%'} height={'100%'}>
    <Column width={'100%'} height={'75%'} justifyContent={'center'} alignItems={'center'}>
      <Typography variant={'h3'}>{'Constrct.js'}</Typography>
      <Padded>
        <Typography variant={'body1'}>{'monorepo style application stack'}</Typography>
      </Padded>
      <Construct />
    </Column>
    <hr />
    <Column width={'100%'} height={'100%'}>
      {children}
    </Column>
  </Row>
);

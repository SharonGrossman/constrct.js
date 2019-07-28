import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import { Column } from '../Layout';
import styled from 'styled-components';

const LargeCircularProgress = styled(CircularProgress)`
  width: 150px !important;
  height: 150px !important;
`;

const SmallFavorite = styled(Favorite)`
  height: 0.8em !important;
  width: 0.8em !important;
`;

const MarkedBox = styled(Column)`
  border-radius: 10px;
  border: 1px dotted black;
`;

export default () => (
  <Column height={'100%'} width={'100%'} alignItems={'center'} justifyContent={'center'}>
    <LargeCircularProgress color={'secondary'} />
    <MarkedBox p={2} m={5} justifyContent={'center'} alignItems={'center'}>
      <Typography variant={'caption'}>
        {'Made with'} <SmallFavorite /> {'by Sharon Grossman'}
      </Typography>
    </MarkedBox>
  </Column>
);

import React from 'react';
import styled from 'styled-components';
import { Row } from '../../../components/Layout';
import { Typography } from '@material-ui/core';
import { School as Logo } from '@material-ui/icons';

const HeaderTitle = styled(Row)`
  border-radius: 6px 6px 0 0;
`;

const SchoolLogo = styled(Logo)`
  font-size: 24px !important;
`;

export default ({ title }) => (
  <HeaderTitle bgcolor={'secondary.main'} width={'100%'} height={'25%'} alignItems={'center'}>
    <Row p={2} flexGrow={1}>
      <Typography variant={'body2'}>{title}</Typography>
    </Row>
    <Row p={2} alignItems={'flex-end'}>
      <SchoolLogo />
    </Row>
  </HeaderTitle>
);

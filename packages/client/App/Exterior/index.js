import React from 'react';
import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';
import RowContent from '../components/Layout/RowContent';
import ColumnContent from '../components/Layout/ColumnContent';
import { SchoolOutlined } from '@material-ui/icons';

const StyledColumnContent = styled(ColumnContent)`
  background-color: #336b9c;
`;

const SchoolLogo = styled(SchoolOutlined)`
  font-size: 110px !important;
`;

export default ({ children }) => (
  <RowContent width={'100%'}>
    <StyledColumnContent width={'50%'} justifyContent={'center'} alignItems={'center'}>
      <SchoolLogo />
      <Typography variant={'h5'}>{'makmacademy'}</Typography>
    </StyledColumnContent>
    <ColumnContent width={'50%'} justifyContent={'center'} alignItems={'center'}>
      {children}
    </ColumnContent>
  </RowContent>
);

import React from 'react';
import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { CallMissedOutlined as MissingIcon, SchoolOutlined } from '@material-ui/icons';

const StyledBox = styled(Box)`
  background-color: #336b9c;
`;
const EnlargedMissingIcon = styled(MissingIcon)`
font-size: 85px !important;
`;

const SchoolLogo = styled(SchoolOutlined)`
  font-size: 110px !important;
`;

export default () => (
  <>
    <EnlargedMissingIcon/>
    <Typography
      variant={'h4'}>
      {'The page you are looking for is missing!'}
    </Typography>
  </>
);

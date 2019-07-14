import React from 'react';
import { Box } from '@material-ui/core';

export default ({ children, ...rest }) => (
  <Box display={'flex'} flexDirection={'row'} {...rest}>
    {children}
  </Box>
);

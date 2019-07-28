import React from 'react';
import { Box } from '@material-ui/core';

export const Row = ({ children, ...rest }) => (
  <Box display={'flex'} flexDirection={'row'} {...rest}>
    {children}
  </Box>
);

export const Column = ({ children, ...rest }) => (
  <Box display={'flex'} flexDirection={'column'} {...rest}>
    {children}
  </Box>
);

export const Padded = ({ children, padding = 1, ...rest }) => (
  <Box p={padding} {...rest}>
    {children}
  </Box>
);

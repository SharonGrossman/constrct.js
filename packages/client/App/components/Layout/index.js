import React from 'react';
import { Box } from '@material-ui/core';
import { useTheme } from '../../Providers/ThemeProvider';

export default ({ children }) => {
  const {
    theme: {
      background: { default: defaultBackground }
    }
  } = useTheme();

  return (
    <Row bgcolor={defaultBackground} height={'100%'} width={'100%'}>
      {children}
    </Row>
  );
};

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

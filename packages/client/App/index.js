import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Flex } from 'reflexbox';
import AppProviders from './Providers';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#828aff'
    }
  }
});

export default ({ children }) => (
  <AppProviders>
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <Flex auto>{children}</Flex>
      </CssBaseline>
    </MuiThemeProvider>
  </AppProviders>
);

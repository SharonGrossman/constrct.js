import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Flex } from 'reflexbox';
import { AuthProvider } from './Providers/AuthProvider';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#828aff'
    },
    accent: {
      main: '#efefef'
    },
    background: {
      default: '#fff4f4'
    }
  }
});

export default ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <AuthProvider>
        <Flex auto>{children}</Flex>
      </AuthProvider>
    </CssBaseline>
  </MuiThemeProvider>
);

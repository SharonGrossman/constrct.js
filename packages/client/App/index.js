import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { AuthProvider } from './Providers/AuthProvider';
import { ThemeProvider } from './Providers/ThemeProvider';
import Layout from './components/Layout';

export default ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CssBaseline>
          <Layout>{children}</Layout>
        </CssBaseline>
      </AuthProvider>
    </ThemeProvider>
  );
};

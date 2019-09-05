import React from 'react';
import { CssBaseline } from '@material-ui/core';
import AppProviders from './Providers';
import Layout from './components/Layout';

export default ({ children }) => {
  return (
    <AppProviders>
      {' '}
      <CssBaseline>
        <Layout>{children}</Layout>
      </CssBaseline>
    </AppProviders>
  );
};

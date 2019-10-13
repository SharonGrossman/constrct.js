import React from 'react';
import { CssBaseline } from '@material-ui/core';
import AppProviders from './Providers';
import Layout from './components/Layout';
import initialize from './utilities/axios/interceptors';

export default ({ children }) => {
  initialize();

  return (
    <AppProviders>
      <CssBaseline>
        <Layout>{children}</Layout>
      </CssBaseline>
    </AppProviders>
  );
};

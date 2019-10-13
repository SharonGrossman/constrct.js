import React from 'react';
import { CssBaseline } from '@material-ui/core';
import initialize from './utilities/axios/interceptors';
import AppProviders from './Providers';
import Layout from './components/Layout';

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

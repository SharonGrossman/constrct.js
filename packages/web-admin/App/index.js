import React from 'react';
import { CssBaseline } from '@material-ui/core';
import AxiosWrapper from './utilities/axios/interceptors';
import AppProviders from './Providers';
import Layout from './components/Layout';

export default ({ children }) => (
  <AppProviders>
    <CssBaseline>
      <Layout>
        <AxiosWrapper>{children}</AxiosWrapper>
      </Layout>
    </CssBaseline>
  </AppProviders>
);

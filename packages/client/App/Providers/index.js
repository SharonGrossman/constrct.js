import React from 'react';
import AuthProvider from './AuthProvider';
import ThemeProvider from './ThemeProvider';
import NotificationProvider from './NotificationProvider';
import LoadingProvider from './LoadingProvider';
import AxiosProvider from './AxiosProvider';

export default ({ children }) => (
  <ThemeProvider>
    <NotificationProvider>
      <LoadingProvider>
        <AxiosProvider>
          <AuthProvider>{children}</AuthProvider>
        </AxiosProvider>
      </LoadingProvider>
    </NotificationProvider>
  </ThemeProvider>
);

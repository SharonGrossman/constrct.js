import React from 'react';
import AuthProvider from './AuthProvider';
import ThemeProvider from './ThemeProvider';
import NotificationProvider from './NotificationProvider';
import LoadingProvider from './LoadingProvider';

export default ({ children }) => (
  <ThemeProvider>
    <NotificationProvider>
      <LoadingProvider>
        <AuthProvider>{children}</AuthProvider>
      </LoadingProvider>
    </NotificationProvider>
  </ThemeProvider>
);

import React from 'react';
import AuthProvider from './AuthProvider';
import ThemeProvider from './ThemeProvider';
import NotificationProvider from './NotificationProvider';
import LoadingProvider from './LoadingProvider';
import UserProvider from './UserProvider';

export default ({ children }) => (
  <ThemeProvider>
    <NotificationProvider>
      <LoadingProvider>
        <UserProvider>
          <AuthProvider>{children}</AuthProvider>
        </UserProvider>
      </LoadingProvider>
    </NotificationProvider>
  </ThemeProvider>
);

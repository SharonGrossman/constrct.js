import React from 'react';
import TokenProvider from './TokenProvider';
import ThemeProvider from './ThemeProvider';
import NotificationProvider from './NotificationProvider';
import LoadingProvider from './LoadingProvider';
import UserProvider from './UserProvider';

export default ({ children }) => (
  <ThemeProvider>
    <NotificationProvider>
      <LoadingProvider>
        <UserProvider>
          <TokenProvider>{children}</TokenProvider>
        </UserProvider>
      </LoadingProvider>
    </NotificationProvider>
  </ThemeProvider>
);

import React from 'react';
import TokenProvider from './TokenProvider';
import ThemeProvider from './ThemeProvider';
import NotificationProvider from './NotificationProvider';
import LoadingProvider from './LoadingProvider';
import UserProvider from './UserProvider';

export default ({ children }) => (
  <ThemeProvider>
    <LoadingProvider>
      <UserProvider>
        <TokenProvider>
          <NotificationProvider>{children}</NotificationProvider>
        </TokenProvider>
      </UserProvider>
    </LoadingProvider>
  </ThemeProvider>
);

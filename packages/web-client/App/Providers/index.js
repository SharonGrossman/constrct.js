import React from 'react';
import TokenProvider from './TokenProvider';
import ThemeProvider from './ThemeProvider';
import NotificationProvider from './NotificationProvider';
import LoadingProvider from './LoadingProvider';
import XhrProvider from './XhrProvider';
import UserProvider from './UserProvider';

export default ({ children }) => (
  <ThemeProvider>
    <LoadingProvider>
      <UserProvider>
        <TokenProvider>
          <XhrProvider>
            <NotificationProvider>{children}</NotificationProvider>
          </XhrProvider>
        </TokenProvider>
      </UserProvider>
    </LoadingProvider>
  </ThemeProvider>
);

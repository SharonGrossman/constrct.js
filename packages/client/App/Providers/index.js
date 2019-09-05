import React from 'react';
import { AuthProvider } from './AuthProvider';
import { ThemeProvider } from './ThemeProvider';
import { NotificationProvider } from './NotificationProvider';

export default ({ children }) => (
  <ThemeProvider>
    <NotificationProvider>
      <AuthProvider>{children}</AuthProvider>
    </NotificationProvider>
  </ThemeProvider>
);

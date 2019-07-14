import React from 'react';
import { AuthProvider } from './AuthProvider';
import { AxiosProvider } from './AxiosProvider';
import { UserProvider } from './UserProvider';

export default ({ children }) => (
  <AuthProvider>
    <AxiosProvider>
      <UserProvider>{children}</UserProvider>
    </AxiosProvider>
  </AuthProvider>
);

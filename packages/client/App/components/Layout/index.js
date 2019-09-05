import React from 'react';
import { Layout } from 'mui-flex-layout';
import { useTheme } from '../../Providers/ThemeProvider';

export default ({ children }) => {
  const {
    theme: {
      background: { default: defaultBackground }
    }
  } = useTheme();

  return <Layout color={defaultBackground}>{children}</Layout>;
};

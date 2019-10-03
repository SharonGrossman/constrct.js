import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../Providers/ThemeProvider';

export default ({ theme, component: Component, children, ...rest }) => {
  const { getPalette } = useTheme();
  const { theme: color } = getPalette();

  const ThemedComponent = styled(Component)`
    background-color: ${color};
  `;

  return <ThemedComponent {...rest}>{children}</ThemedComponent>;
};

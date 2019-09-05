import React from 'react';
import { useTheme } from '../../Providers/ThemeProvider';
import styled from 'styled-components';

export default ({ theme, component: Component, children, ...rest }) => {
  const { getPalette } = useTheme();
  const { theme: color } = getPalette();

  const ThemedComponent = styled(Component)`
    background-color: ${color};
  `;

  return <ThemedComponent {...rest}>{children}</ThemedComponent>;
};

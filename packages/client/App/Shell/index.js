import React, { memo } from 'react';
import { Column } from '../components/Layout';
import Toolbar from '../components/Toolbar';

export default memo(({ children }) => {
  return (
    <Column width={'100%'} height={'100%'}>
      <Toolbar />
      {children}
    </Column>
  );
});

import React, { memo } from 'react';
import { Column } from 'mui-flex-layout';
import Toolbar from '../components/Toolbar';

export default memo(({ children }) => (
  <Column width={'100%'} height={'100%'}>
    <Toolbar />
    {children}
  </Column>
));

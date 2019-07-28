import React, { memo } from 'react';
import { Row, Column } from '../components/Layout';
import Toolbar from '../components/Toolbar';

export default memo(({ children }) => {
  return (
    <Column display={'flex'} flexGrow={1} flexDirection={'column'} width={'100%'} height={'100%'}>
      <Row height={'5%'} display={'flex'}>
        <Toolbar />
      </Row>
      {children}
    </Column>
  );
});

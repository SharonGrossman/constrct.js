import React, { memo } from 'react';
import ColumnContent from '../components/Layout/ColumnContent';
import RowContent from '../components/Layout/RowContent';
import Toolbar from '../components/Toolbar';

export default memo(({ children }) => {
  return (
    <ColumnContent display={'flex'} flexGrow={1} flexDirection={'column'} width={'100%'} height={'100%'}>
      <RowContent height={'5%'} display={'flex'}>
        <Toolbar />
      </RowContent>
      {children}
    </ColumnContent>
  );
});

import React, { memo, useState } from 'react';
import { Box } from '@material-ui/core';
import Toolbar from '../components/Toolbar';

export default memo(({ children }) => {
  return (
    <Box display={'flex'} flexDirection={'column'} width={'100%'} height={'100%'}>
      <Box height={'5%'} display={'flex'}>
        <Toolbar/>
      </Box>
      {children}
    </Box>
  );
});

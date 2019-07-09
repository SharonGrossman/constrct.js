import React, { memo, useState } from 'react';
import { Flex } from 'reflexbox';
import Toolbar from '../../components/Toolbar';

export default memo(() => {
  return (
    <>
      <Toolbar />
      <Flex auto column align="center" justify="center">
        Hello World
      </Flex>
    </>
  );
});

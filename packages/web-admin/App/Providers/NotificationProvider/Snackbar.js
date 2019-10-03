import React from 'react';
import { Snackbar } from '@material-ui/core';

export default ({ opened, handleClose, message }) => (
  <Snackbar
    open={opened}
    message={message}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
    autoHideDuration={4000}
  />
);

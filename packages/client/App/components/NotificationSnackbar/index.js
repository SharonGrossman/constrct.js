import React from 'react';
import { Snackbar, Typography } from '@material-ui/core';

export default ({ opened, handleClose, message }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
    open={opened}
    autoHideDuration={4000}
    onClose={handleClose}
    message={<Typography variant={'caption'}>{message}</Typography>}
  />
);

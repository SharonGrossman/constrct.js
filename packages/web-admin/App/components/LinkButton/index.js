import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default ({ to, message, ...props }) => (
  <Button component={Link} to={to} {...props}>
    {message}
  </Button>
);

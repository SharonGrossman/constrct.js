import React, { createContext, useState, useContext } from 'react';
import { Snackbar } from '@material-ui/core';

const NotificationContext = createContext();

const Notification = ({ opened, handleClose, message }) => (
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

export const NotificationProvider = props => {
  const [message, setMessage] = useState(null);
  const [opened, setOpened] = useState(false);

  const open = ({ message }) => {
    setMessage(message);
    setOpened(true);
  };

  const close = () => {
    setMessage(null);
    setOpened(false);
  };

  return (
    <NotificationContext.Provider
      value={{
        close,
        open
      }}
      {...props}
    >
      <Notification message={message} opened={opened} handleClose={close} />
      {props.children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);

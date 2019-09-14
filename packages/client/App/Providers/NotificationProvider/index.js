import React, { createContext, useState, useContext } from 'react';
import Notification from './Snackbar';

const NotificationContext = createContext();

export default props => {
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

  const { children } = props;

  return (
    <NotificationContext.Provider
      value={{
        close,
        open
      }}
      {...props}
    >
      <Notification message={message} opened={opened} handleClose={close} />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);

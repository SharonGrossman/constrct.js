import React, { useState, useContext, useEffect, createContext } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import initialState, { INITIAL_PALETTE_TYPE } from './initial.theme';
import lightTheme from './light.theme';
import darkTheme from './dark.theme';

const getTypeFromLocalStorage = () => localStorage.getItem('theme') || INITIAL_PALETTE_TYPE;
const setLocalStorageType = theme => localStorage.setItem('theme', theme);
const removeTypeFromLocalStorage = () => localStorage.removeItem('theme');

const ThemeContext = createContext(initialState);

export const ThemeProvider = props => {
  const [theme, setTheme] = useState(createMuiTheme(initialState));
  const [type, setType] = useState(getTypeFromLocalStorage());

  const toggleTheme = () => {
    const newType = type === 'light' ? 'dark' : 'light';

    setType(newType);
  };

  useEffect(() => {
    const newTheme = createMuiTheme(type === 'light' ? lightTheme : darkTheme);

    setTheme(newTheme);
    setLocalStorageType(type);
  }, [type]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
      {...props}
    >
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

import { deepOrange } from '@material-ui/core/colors';
import lightTheme from './light.theme';

export const { 500: ERROR_MAIN } = deepOrange;
export const INITIAL_PALETTE_TYPE = 'light';

export const typography = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(',')
};

export default {
  palette: {
    error: {
      main: ERROR_MAIN
    }
  },
  ...lightTheme,
  ...typography
};

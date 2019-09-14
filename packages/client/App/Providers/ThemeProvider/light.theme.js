import { blue, grey, pink } from '@material-ui/core/colors';
import { darken } from '@material-ui/core/styles';

const { 700: LIGHT_PRIMARY_MAIN } = blue;
const LIGHT_SECONDARY_MAIN = darken(pink.A400, 0.1);
const LIGHT_BACKGROUND = '#fff';
const { 100: LIGHT_APPBAR } = grey;

export default {
  palette: {
    type: 'light',
    primary: {
      main: LIGHT_PRIMARY_MAIN
    },
    secondary: {
      main: LIGHT_SECONDARY_MAIN
    }
  },
  background: {
    default: LIGHT_BACKGROUND,
    level1: LIGHT_APPBAR
  }
};

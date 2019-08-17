import { blue, grey, pink } from '@material-ui/core/colors';
import { darken } from '@material-ui/core/styles';
import { ACCENT_MAIN } from './initial.theme';

const LIGHT_PRIMARY_MAIN = blue[700];
const LIGHT_SECONDARY_MAIN = darken(pink.A400, 0.1);
const LIGHT_BACKGROUND = '#fff';
const LIGHT_APPBAR = grey[100];

export default {
  palette: {
    type: 'light',
    primary: {
      main: LIGHT_PRIMARY_MAIN
    },
    secondary: {
      main: LIGHT_SECONDARY_MAIN
    },
    accent: {
      main: ACCENT_MAIN
    }
  },
  background: {
    default: LIGHT_BACKGROUND,
    level1: LIGHT_APPBAR
  }
};

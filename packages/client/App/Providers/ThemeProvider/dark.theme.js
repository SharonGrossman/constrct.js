import { blue, grey, pink } from '@material-ui/core/colors';
import { ACCENT_MAIN } from './initial.theme';

const DARK_PRIMARY_MAIN = blue[200];
const DARK_SECONDARY_MAIN = pink[200];
const DARK_BACKGROUND = grey[900];

export default {
  palette: {
    type: 'dark',
    primary: {
      main: DARK_PRIMARY_MAIN
    },
    secondary: {
      main: DARK_SECONDARY_MAIN
    },
    accent: {
      main: ACCENT_MAIN
    }
  },
  background: {
    default: DARK_BACKGROUND
  }
};

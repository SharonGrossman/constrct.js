import { blue, grey, pink } from '@material-ui/core/colors';

const { 200: DARK_PRIMARY_MAIN } = blue;
const { 200: DARK_SECONDARY_MAIN } = pink;
const { 900: DARK_BACKGROUND } = grey;

export default {
  palette: {
    type: 'dark',
    primary: {
      main: DARK_PRIMARY_MAIN
    },
    secondary: {
      main: DARK_SECONDARY_MAIN
    }
  },
  background: {
    default: DARK_BACKGROUND
  }
};

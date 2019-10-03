import { indigo, grey, pink, blue } from '@material-ui/core/colors';
import { darken } from '@material-ui/core/styles';

const { 300: LIGHT_PRIMARY_MAIN } = indigo;
const { A100: LIGHT_SECONDARY_MAIN } = blue;
const LIGHT_BACKGROUND = '#fff';

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
    default: LIGHT_BACKGROUND
  }
};

import { createMuiTheme, darken } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0073BC',
    },
    secondary: {
      main: '#F9A84D',
    },
    terciary: {
      main: '#F9A84D',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FEFEFE',
    },
  },

  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: '#00A84E',
        textTransform: 'lowercase',
        letterSpacing: 2,
        color: '#fff',
        '&:hover': {
          backgroundColor: darken('#00A84E', 0.1),
        },
      },
    },
  },
})

export default theme

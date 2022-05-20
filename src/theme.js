import { createTheme } from '@mui/material/styles'

export const Colors = {
  primary: '#5f2c3e',
  secondary: '#d1adcc',
  success: '#4CAF50',
  info: '#08fdd8',
  error: '#fd1056',
  warning: '#FFC107',
  dark: '#1d1d1d',
  dark_light: '#343434',
  light: '#aaa',
  muted: '#abafb3',
  grey: '#a5a5a5',
  border: '#DDDFE1',
  inverse: '#2F3D4A',
  shaft: '#333',
  ///////////////
  // Grays
  ///////////////
  dim_grey: '#696969',
  dove_gray: '#d5d5d5',
  body_bg: '#f3f6f9',
  light_gray: 'rgb(230,230,230)',
  ///////////////
  // Solid Color
  ///////////////
  white: '#fff',
  black: '#000',
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    error: {
      main: Colors.error,
    },
    warning: {
      main: Colors.warning,
    },
    info: {
      main: Colors.info,
    },
    success: {
      main: Colors.success,
    },
    dark_grey: {
      main: Colors.grey,
    },
    background: {
      default: Colors.dark,
      light: Colors.dark_light,
      // default: Colors.body_bg,
      // default: Colors.dove_gray,
    },
    text: {
      primary: {
        main: Colors.light,
      },
      secondary: {
        main: Colors.body_bg,
      },
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 10,
          },
        },
      ],
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiIcon: {
      defaultProps: {
        padding: 0,
      },
    },
  },
})

export default theme

import { createTheme } from '@mui/material/styles'

export const Colors = {
  primary: '#9e9e9e',
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
  tertiary: '#e2e2e2',
  light_gray: '#f3f6f9',
  dark_grey: '#c5c5c5',
  ///////////////
  // Grays
  ///////////////
  dim_grey: '#696969',
  dove_gray: '#d5d5d5',
  body_bg: '#f3f6f9',
  // light_gray: 'rgb(230,230,230)',
  ///////////////
  // Solid Color
  ///////////////
  white: '#fff',
  black: '#000',
}

// Create a theme instance.
const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: 'red',
        secondary: 'yellow',
        error: 'orange',
        warning: 'orange',
        info: 'blue',
        success: 'green',
        dark_grey: 'grey',
        background: {
          default: 'black',
          light: 'lightgray',
          // default: Colors.body_bg,
          // default: Colors.dove_gray,
        },
      },
    },
    dark: {
      palette: {
        primary: Colors.primary,
        secondary: Colors.secondary,
        error: Colors.error,
        warning: Colors.warning,
        info: Colors.info,
        success: Colors.success,
        dark_grey: Colors.grey,
        background: {
          default: Colors.dark,
          light: Colors.dark_light,
          // default: Colors.body_bg,
          // default: Colors.dove_gray,
        },
      },
    },

    text: {
      primary: {
        main: Colors.light,
      },
      secondary: {
        main: Colors.body_bg,
      },
      tertiary: {
        main: Colors.dark,
      },
      light: {
        main: Colors.dark_light,
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

// Create a dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9e9e9e',
    },
    secondary: {
      main: '#08fdd8',
    },
    tertiary: {
      main: '#f3f6f9',
    },
    dark_grey: {
      main: '#c5c5c5',
    },
    error: {
      main: '#fd1056',
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

// Create a dark theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9e9e9e',
    },
    secondary: {
      main: '#16243f',
    },
    tertiary: {
      main: Colors.light_gray,
    },
    dark_grey: {
      main: Colors.dark_grey,
    },
    error: {
      main: '#e31003',
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

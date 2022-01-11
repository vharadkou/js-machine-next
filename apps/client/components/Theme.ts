import { createTheme } from '@mui/material/styles';
import { Mixins } from '@mui/material/styles/createMixins';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#ffeb3b',
      light: '#ffef62',
      dark: '#b2a429',
    },
  },
  typography: {
    fontFamily: [
      'Avenir Next',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#f2e14c',
            fontWeight: 'bold',
          },
        },
      },
    },
  },
});

theme.mixins = createMixins(theme.mixins);

function createMixins(mixins: Mixins) {
  return {
    bluredBackground: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(3px)',
    },
    responsiveBlur: {
      backdropFilter: { xs: 'blur(3px)', sm: 'none' },
    },
    ...mixins,
  };
}

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    bluredBackground: CSSProperties;
    responsiveBlur: CSSProperties;
  }
}

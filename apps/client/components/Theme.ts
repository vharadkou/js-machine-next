import { createTheme } from '@mui/material/styles';
import { Mixins } from '@mui/material/styles/createMixins';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    bluredBackground: CSSProperties;
    responsiveBlur: CSSProperties;
    markdown: CSSProperties;
  }
}

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
    markdown: {
      '& article': {
        fontFamily: 'Avenir Next',
      },
      '& h1': {
        color: 'rgba(0, 0, 0, 0.85)',
        fontSize: 36,
        mt: 1,
        mb: 1,
        fontFamily: 'Arvo',
      },
      '& h2': {
        fontFamily: 'Russo One',
        mt: 0.5,
        mb: 0.5,
        ml: 0,
        mr: 0,
        fontSize: 24,
        color: 'rgb(41, 41, 41)',
      },
      '& h3': {
        color: 'rgb(41, 41, 41)',
        mt: 4.5,
        mb: 0,
        fontFamily: 'Russo One',
        fontSize: 20,
      },
      '& p': {
        lineHeight: '1.5em',
        fontSize: 18,
        mt: 1,
      },
      '& a': {
        color: '#2F5C7C',
      },
    },
    ...mixins,
  };
}

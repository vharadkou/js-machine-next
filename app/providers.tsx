'use client';

import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';

import { theme } from './_components/Theme';
import { store } from './_redux/store';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}

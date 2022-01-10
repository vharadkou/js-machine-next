import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { Layout } from '../components/Layout/Layout';
import { theme } from '../components/Theme';
import { ThemeProvider } from '@mui/material/styles';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JS Machine App</title>
      </Head>
      <main>
        <ThemeProvider theme={theme}>
          <Layout />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;

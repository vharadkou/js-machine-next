import { useMemo } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import './styles.css';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import { store } from '../redux/store';
import { Layout } from '../components/Layout/Layout';
import { theme } from '../components/Theme';
import FaviconIco from '../public/favicon.ico';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showHeader = useMemo(
    () => router.pathname !== '/digest/[slug]',
    [router.pathname]
  );

  return (
    <>
      <Head>
        <meta name="description" content="JS Machine App"></meta>
        <link rel="icon" type="image/x-icon" href={FaviconIco.src} />
        <link rel="apple-touch-icon" href={FaviconIco.src} />
      </Head>
      <main>
        <ThemeProvider theme={theme}>
          {showHeader && <Layout />}
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;

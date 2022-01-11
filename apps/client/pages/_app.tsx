import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import { store } from '../redux/store';
import { Layout } from '../components/Layout/Layout';
import { theme } from '../components/Theme';
import FaviconIco from '../public/favicon.ico';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JS Machine App</title>
        <link rel="icon" type="image/x-icon" href={FaviconIco.src} />
        <link rel="apple-touch-icon" href={FaviconIco.src} />
      </Head>
      <main>
        <ThemeProvider theme={theme}>
          <Layout />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;

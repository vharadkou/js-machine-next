import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="application-name" content="JS Machine App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JS Machine App" />
        <meta name="description" content="JS Machine App" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icons/icon-192x192-round.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/icon-192x192-round.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/icon-192x192-round.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/icon-192x192-round.png"
        />

        <link rel="icon" sizes="32x32" href="/icons/icon-192x192-round.png" />
        <link rel="icon" sizes="16x16" href="/icons/icon-192x192-round.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/icon-192x192-round.png" color="#5bbad5" />
        <link rel="shortcut icon" href="/icons/icon-192x192-round.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional"
        />

        <meta name="twitter:card" content="JS Machine App" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="JS Machine App" />
        <meta name="twitter:description" content="JS Machine App" />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="JS Machine App" />
        <meta property="og:description" content="JS Machine App" />
        <meta property="og:site_name" content="JS Machine App" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/icons/apple-touch-icon.png"
        />

        {/* apple splash screen images */}
        {/* <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_2048.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1668.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1536.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1125.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1242.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_750.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_640.png"
          sizes="640x1136"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

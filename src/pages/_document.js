import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="https://amritafashions.com/wp-content/uploads/amrita-fashions-company-logo-150x150.webp" sizes="32x32" />
        {/* Defer main CSS to avoid render-blocking */}
        <link
          rel="stylesheet"
          href="/_next/static/css/styles.css"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link rel="stylesheet" href="/_next/static/css/styles.css" />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 
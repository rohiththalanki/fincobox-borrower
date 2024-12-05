import { Html, Head, Main, NextScript } from 'next/document'
import { ColorSchemeScript } from '@mantine/core';

export default function Document() {
  return (
    <Html>
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;600&family=Outfit:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;700&display=swap"
        />
        <link
          type='image/x-icon'
          rel="icon"
          href="../../assets/logo/favicon.ico"
        />
      </Head>
      < body >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
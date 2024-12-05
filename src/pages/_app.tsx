import './global.css';
import '@mantine/core/styles.css';

import React from 'react';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { Hydrate, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';
import { useGetQueryClient } from '../common/lib/react-query-client';
// import { theme } from './theme';

// Custom App Component
function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useGetQueryClient();

  // Handle per-page layouts with `getLayout`
  const getLayout = (Component as any).getLayout || ((page: React.ReactNode) => page);

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <MantineProvider>
          <Head>
            <title>Fincobox | Dashboard</title>
          </Head>
          {getLayout(<Component {...pageProps} />)}
        </MantineProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

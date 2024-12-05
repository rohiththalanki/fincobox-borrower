import './global.css';
import '@mantine/core/styles.css';

import React from 'react';
import Head from 'next/head';
import { createTheme, MantineProvider } from '@mantine/core';

import type { NextComponentType } from 'next';
import type { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';

import { Hydrate, QueryClientProvider } from 'react-query';

import { useGetQueryClient } from '../common/lib/react-query-client';

import { theme } from './theme';

export const MyApp: NextComponentType<
  AppContext,
  AppInitialProps,
  AppLayoutProps
> = ({
  Component,
  pageProps: { dehydratedState, ...pageProps },
}: AppLayoutProps) => {
    const queryClientRef = useGetQueryClient();
    const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

    return (
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={dehydratedState}>
          <MantineProvider theme={theme}>
            <Head><title>Fincobox | Dashboard</title></Head>
            {getLayout(<Component {...pageProps} />)}
          </MantineProvider>
        </Hydrate>
      </QueryClientProvider>
    );
  };

export default MyApp;

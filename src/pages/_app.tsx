import './global.css';

import type { NextComponentType } from 'next';
import type { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import React from 'react';
import { Hydrate, QueryClientProvider } from 'react-query';

import { useGetQueryClient } from '../common/lib/react-query-client';

import { StoreContext, storeContextStore } from '../store/global-context-provider';

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
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <StoreContext.Provider value={storeContextStore}>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={dehydratedState}>
            <div>
              {getLayout(<Component {...pageProps} />)}
            </div>
          </Hydrate>
        </QueryClientProvider>
      </StoreContext.Provider>
    </NextThemesProvider>
  );
};

export default MyApp;

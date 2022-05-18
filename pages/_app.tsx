import "../styles/globals.css";
import "../styles/custome-styles.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>Disney</title>
          <link
            href="/images/logo.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <>{getLayout(<Component {...pageProps} />)}</>
      </SessionProvider>
    </>
  );
}

export default MyApp;

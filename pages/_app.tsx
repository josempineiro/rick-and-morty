import { ReactNode } from "react";
import { NextPage } from "next";
import { ApolloProvider } from "@apollo/client";
import Head from "next/head";
import { AppProps } from "next/app";
import Layout from "components/ui/Layout";
import Notifier from "components/ui/Notifier";
import Signature from "components/ui/Signature";
import client from "apollo/client";
import "styles/globals.css";

type Page<P = {}> = NextPage<P> & {
  Layout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

function App({ Component, pageProps }: Props) {
  const AppLayout: any = Component.Layout || Layout;
  return (
    <ApolloProvider client={client}>
      <AppLayout>
        <Head>
          <title>Rick and Morty</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#0891b2"></meta>
          <meta name="theme-color" content="#0891b2"></meta>
          <meta name="title" content="Rick and Morty" />
          <meta name="description" content="Funny Rick and Morty application" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="msapplication-TileColor" content="#0891b2" />
          <meta
            name="msapplication-TileImage"
            content="/icons/android-chrome-512x512.png"
          />
          <meta name="theme-color" content="#0891b2" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="google-site-verification"
            content="12SzhX8l1tk3jBwLdqfOAbsJ-5DaB-AWcHKd7nJICI8"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rick-and-morty.leman.dev/" />
          <meta property="og:title" content="Rick and Morty" />
          <meta
            property="og:description"
            content="Funny Rick and Morty application"
          />
          <meta
            property="og:image"
            content="/icons/android-chrome-512x512.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://rick-and-morty.leman.dev/"
          />
          <meta
            property="twitter:title"
            content="Funny Rick and Morty application"
          />
          <meta
            property="twitter:description"
            content="Funny Rick and Morty application"
          />
          <meta
            property="twitter:image"
            content="/icons/android-chrome-512x512.png"
          />
        </Head>
        <Component {...pageProps} />
        <Signature />
        <div id="headlessui-portal-root">
          <div />
        </div>
        <Notifier />
      </AppLayout>
    </ApolloProvider>
  );
}

App.displayName = "App";

export default App;

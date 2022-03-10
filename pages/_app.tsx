import { ApolloProvider } from "@apollo/client";
import Head from "next/head";
import { AppProps } from "next/app";
import Layout from "components/ui/Layout";
import client from "apollo/client";
import "styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
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
          <meta name="msapplication-TileColor" content="#1a1f18"></meta>
          <meta name="theme-color" content="#192d1a"></meta>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

App.displayName = "App";

export default App;

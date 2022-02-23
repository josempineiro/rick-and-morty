import { ApolloProvider } from '@apollo/client'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Layout from 'components/ui/Layout'
import client from 'apollo/client'
import 'styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Head>
          <title>Rick and Morty</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

App.displayName = 'App'

export default App

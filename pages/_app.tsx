import { AppProps } from 'next/app'
import 'styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

App.displayName = 'App'

export default App

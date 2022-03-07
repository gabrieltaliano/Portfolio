import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ScrollProvider } from '../Contexts/scrollContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <ScrollProvider>
    <Component {...pageProps} />
  </ScrollProvider>
}

export default MyApp

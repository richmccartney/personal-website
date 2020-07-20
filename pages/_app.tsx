import { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.css'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

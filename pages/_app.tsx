import { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.css'
import '../styles/index.css'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

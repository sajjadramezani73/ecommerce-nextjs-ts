import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Provider } from "react-redux";
import Layout from '../components/layout/Layout';
import { store } from '../store/store'
import '../style/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Createee Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

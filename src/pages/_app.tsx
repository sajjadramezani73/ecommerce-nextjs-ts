import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import Layout from '../components/layout/Layout';
import { store } from '../store/store'
import '../style/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

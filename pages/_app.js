import Layout from '../components/Layout';
import ProviderWrapper from '../components/ProviderWrapper';

import '../styles/globals.css'


// wraps around all of the page components
function MyApp({ Component, pageProps }) {
  return (
    <ProviderWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProviderWrapper>
  )
}

export default MyApp

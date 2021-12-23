import Layout from '../components/Layout';

import '../styles/globals.css'


// wraps around all of the page components
function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

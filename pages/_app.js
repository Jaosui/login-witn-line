import '../styles/globals.css'
import 'antd/dist/antd.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className='overlay'>
      <Head>
        <title>Line login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

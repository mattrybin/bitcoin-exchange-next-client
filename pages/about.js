import App from '../components/App'
import Header from '../components/Header'
import Head from 'next/head'

export default (props) => (
  <App>
    <Head>
      <title>This page has a title 🤔</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header pathname={props.url.pathname} />
    <p>This is the about page</p>
  </App>
)

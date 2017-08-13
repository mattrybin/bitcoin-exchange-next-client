import Head from 'next/head'
import { withApollo, compose } from 'react-apollo'

import App from '../components/App'
import Header from '../components/Header'
import withData from '../lib/with-data'
import TransactionList from '../components/TransactionList'

class Index extends React.Component {
  render () {
    return (
      <App>
        <Head>
          <title>This page has a title 🤔</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Header />
        <TransactionList />
      </App>
    )
  }
}

export default compose(
  // withData gives us server-side graphql queries before rendering
  withData,
  // withApollo exposes `this.props.client` used when logging out
  withApollo
)(Index)

import Head from 'next/head'
import cookie from 'cookie'
import { withApollo, compose } from 'react-apollo'

import App from '../components/App'
import Header from '../components/Header'
import TransactionList from '../components/TransactionList'
import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/check-logged-in'
import withData from '../lib/with-data'

const pageData = {
  footer: true,
  header: true,
  title: 'Index'
}

class Transactions extends React.Component {
  render () {
    return (
      <App pageData={pageData}>
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
)(Transactions)

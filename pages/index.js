import cookie from 'cookie'
import { withApollo, compose } from 'react-apollo'

import App from '../components/App'
import Head from '../components/head'
import Header from '../components/Header'
import TransactionList from '../components/TransactionList'
import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/check-logged-in'
import withData from '../lib/with-data'

class Index extends React.Component {
  render () {
    return (
      <App>
        <Head title="Index" />
        <Header />
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

import Head from 'next/head'
import cookie from 'cookie'
import { withApollo, compose } from 'react-apollo'

import App from '../components/App'
import Header from '../components/Header'
import TransactionList from '../components/TransactionList'
import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/check-logged-in'
import withData from '../lib/with-data'

class Transactions extends React.Component {
  static async getInitialProps (context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context, apolloClient)

    if (!loggedInUser.user) {
      // If not signed in, send them somewhere more useful
      redirect(context, '/signin')
    }

    return { loggedInUser }
  }

  signout = () => {
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1 // Expire the cookie immediately
    })

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    this.props.client.resetStore().then(() => {
      // Redirect to a more useful page when signed out
      redirect({}, '/signin')
    })
  }

  render () {
    return (
      <App>
        <Head>
          <title>Transactions - Cryptoasia</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Header />
        <TransactionList />
        <button onClick={this.signout}>Sign out</button>
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

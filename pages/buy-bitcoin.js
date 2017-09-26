import App from '../components/App'
import Head from '../components/head'
import Transaction from '../components/transaction'

const pageData = {
  footer: false,
  header: false,
  title: 'Buy Bitcoin'
}

export default (props) => (
  <App pageData={pageData}>
    <Transaction />
  </App>
)

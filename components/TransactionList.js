import { gql, graphql } from 'react-apollo'
import ErrorMessage from './ErrorMessage'

function TransactionList({ data: {loading, error, allTransactions} }) {
  if (error) return <div>Error</div>
  if (allTransactions && allTransactions.length) {
    return (
      <ul>
        {allTransactions.map(t =>
          <li key={t.id}>
            ID: {t.id}
            How much: {t.amountSatoshi}
          </li>
        )}
      </ul>
    )
  }
  return <div>loading</div>
}

const allTransactions = gql`
  query allTransactions {
    allTransactions {
      id
      amountSatoshi
    }
  }
`

export default graphql(allTransactions)(TransactionList)

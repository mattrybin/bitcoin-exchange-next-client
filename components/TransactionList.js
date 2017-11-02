import { gql, graphql } from 'react-apollo'
import ErrorMessage from './ErrorMessage'
import moment from 'moment'
import { c, s, l, m } from '../lib/theme'

function TransactionList({ data: {loading, error, allTransactions} }) {
  if (error) return <div>Error</div>
  if (allTransactions && allTransactions.length) {
    return (
      <div className="container">
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Phone Number</th>
              <th>Amount</th>
              <th>Confirmed?</th>
            </tr>
          </thead>
          <tbody>
            {allTransactions.map(t =>
              <tr>
                <td data-th="Date">{moment(t.createdAt).fromNow()}</td>
                <td data-th="Phone">{t.phoneNumber}</td>
                <td data-th="Amount">${t.amountDollar}</td>
                <td data-th="Confirmed?">{t.confirmationDate !== null ? "Yes" : "No"}</td>
              </tr>
            )}
          </tbody>
        </table>
        <style jsx>{`
          .rwd-table {
            margin: 1em 0;
            min-width: 300px;
          }
          .rwd-table tr {
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
          }
          .rwd-table th {
            display: none;
          }
          .rwd-table td {
            display: block;
          }
          .rwd-table td:first-child {
            padding-top: .5em;
          }
          .rwd-table td:last-child {
            padding-bottom: .5em;
          }
          .rwd-table td:before {
            content: attr(data-th) ": ";
            font-weight: bold;
            width: 6.5em;
            display: inline-block;
          }
          @media (min-width: ${s.m25}) {
            .rwd-table td:before {
              display: none;
            }
          }
          .rwd-table th, .rwd-table td {
            text-align: left;
          }
          @media (min-width: ${s.m25}) {
            .rwd-table th, .rwd-table td {
              display: table-cell;
              padding: .25em .5em;
            }
            .rwd-table th:first-child, .rwd-table td:first-child {
              padding-left: 0;
            }
            .rwd-table th:last-child, .rwd-table td:last-child {
              padding-right: 0;
            }
          }
        `}</style>
      </div>
    )
  }
  return <div>loading</div>
}

const allTransactions = gql`
  query allTransactions {
    allTransactions(orderBy: createdAt_DESC) {
      amountDollar
      createdAt
      phoneNumber
      confirmationDate
      id
    }
  }
`

export default graphql(allTransactions)(TransactionList)

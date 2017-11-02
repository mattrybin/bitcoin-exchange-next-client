import { c, s, l, m } from '../../lib/theme'
import Link from 'next/link'
import { object,func } from 'prop-types'
import Form from 'react-validify'
import gql from 'graphql-tag'
import withData from '../../lib/with-data'
import redirect from '../../lib/redirect'
import { graphql, withApollo, compose } from 'react-apollo'

import Input from './input'
import Submit from './submit'

import TransactionHeaderBox from './transaction-header-box'

class TransactionPayment extends React.Component {
  constructor(props) {
    super(props);
    this.fieldChange = this.fieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    onChange: func.isRequired,
    onSubmit: func.isRequired,
    data: object.isRequired
  }

  fieldChange(event) {
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
  }

  handleSubmit(event) {
    console.log('hhello')
    this.props.update(this.props.data, this.props.onSubmit)
    //event.preventDefault();
    //this.props.onSubmit();
  }

  dollarToBitcoin(bitcoinValue, dollarAmount) {
    return  (dollarAmount / bitcoinValue).toFixed(4)
  }

  render() {
    let data = this.props.data;
    return (
      <div className="root">
        <header>
          <TransactionHeaderBox title="Wing Payment" subTitle={`Send ${data.amount} dollar to Wing Account`} />
        </header>
        <div className="container">
          <div className="wing-account">
            To continue, we need you to send {data.amount} dollars to our Wing account.
          </div>
          <div className="confirmation-box">
            <div className="confirmation-field">
              <div className="confirmation-field-title">
                <span>Our Wing account:</span>
              </div>
              <div className="confirmation-field-data">
                <span>954 034 023 003</span>
              </div>
            </div>
            <div className="confirmation-field">
              <div className="confirmation-field-title">
                <span>Your Bitcoin address:</span>
              </div>
              <div className="confirmation-field-data">
                <span>1Mz7153HMuxXTuR2R1</span>
              </div>
            </div>
          </div>
          <div className="wing-account">
            The Bitcoin price is determined at the time when we receive your payment
          </div>
          <div className="confirmation-box">
            <div className="confirmation-field">
              <div className="confirmation-field-title">
                <span>Your Bitcoin Amount:</span>
              </div>
              <div className="confirmation-field-data">
                <span>{this.dollarToBitcoin(this.props.bitcoinPrice, data.amount)}</span>
              </div>
            </div>
          </div>
          <Form>
            <Submit submit value="Confirm Wing Payment" onClick={this.handleSubmit} />
          </Form>
        </div>
      <style jsx>{`
        .container {
          padding: 0 ${s.m10};
        }
        .wing-account {
          margin: ${s.m10} 0;
        }
        .confirmation {
          margin-top: ${s.m10};
        }
        .confirmation-title {
          font-weight: 600;
          margin-bottom: ${s.m6};
        }
        .confirmation-box {
          background-color: white;
          border: 1px solid #D8D8D8;
          border-radius: 2px;
        }
        .confirmation-field {
          border-bottom: 1px solid #D8D8D8;
          padding: ${s.m8};
        }
        .confirmation-field:last-child {
          border-bottom: 0;

        }
        .confirmation-field-title {
          font-size: ${s.m9};
          margin-bottom: ${s.m4};
        }
        .confirmation-field-data {
          font-weight: 600;
        }
      `}</style>
      </div>
    )
  }
}

export default compose(
  withData,
  withApollo,
  graphql(
    gql`
      mutation update($id: ID!, $currentTime: DateTime!) {
        updateTransaction	(confirmationDate: $currentTime, id: $id ) {
  	      id
	      }
      }
    `,
    {
      name: 'updateTransaction',
      props: ({
        updateTransaction,
        ownProps: { client }
      }) => ({
        update: (data, onSubmit) => {
          updateTransaction({
            variables: {
              id: data.transactionId,
              currentTime: new Date()
            }
          }).then(({ data: { updateTransaction: { id }}}) => {
            client.resetStore().then(() => {
              console.log(id)
              onSubmit()
            })
          }).catch((error) => {
            console.error(error)
          })
        }
      })
    }
  )
)(TransactionPayment)

import { c, s, l, m } from '../../lib/theme'
import Link from 'next/link'
import { object,func } from 'prop-types'
import gql from 'graphql-tag'
import withData from '../../lib/with-data'
import redirect from '../../lib/redirect'
import checkLoggedIn from '../../lib/check-logged-in'
import { graphql, withApollo, compose } from 'react-apollo'
import cookie from 'cookie'
import Form from 'react-validify'
import _ from 'lodash'

import Input from './input'
import Submit from './submit'

import TransactionHeaderBox from './transaction-header-box'
import Confirmation from './confirmation'

const StateNormal = (props) => {
  return (
    <div className="state-normal">
      <Confirmation items={props.confirmationData} />
      <Form>
        <Submit submit value="Confirm & Buy Bitcoin" onClick={props.handleSubmit} />
      </Form>
    </div>
  )
}

const StateLoading = (props) => {
  return (
    <div className="state-loading">
      <div className="state-loading-text">
        <span>Creating Payment</span>
      </div>
      <div className="state-loading-image">
        <img className="loading" src="/static/three-dots.svg" alt="loading" />
      </div>
      <style jsx>{`
        .state-loading {
          margin-top: ${s.m16};
          text-align: center;
        }
        .state-loading-text {
          font-size: ${s.m11};
          font-weight: 500;

        }
        .loading {
          margin: ${s.m10} auto 0;
          display: block;
          width: ${s.m16};
        }
      `}</style>
    </div>
  )
}

const StateSuccess = (props) => {
  return (
    <div className="state-success">
      <div className="state-success-text">
        <span>Success!</span>
      </div>
      <style jsx>{`
        .state-success {
          margin-top: ${s.m16};
          text-align: center;
        }

        .state-success-text {
          font-size: ${s.m11};
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}

class TransactionInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: 'normal'
    }
    this.fieldChange = this.fieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formStateChanger = this.formStateChanger.bind(this);
  }

  static propTypes = {
    onChange: func.isRequired,
    onSubmit: func.isRequired,
    data: object.isRequired
  }

  formStateChanger(state) {
    this.setState({
      error: state
    })
  }

  fieldChange(event) {
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.props.onChange(value);
  }

  handleSubmit(event) {
    this.props.create(this.props.data, this.formStateChanger, this.props.onSubmit)
  }

  dollarToBitcoin(bitcoinValue, dollarAmount) {
    return  (dollarAmount / bitcoinValue).toFixed(4)
  }

  render() {
    let data = this.props.data;
    const confirmationData = [
      {title: 'Your dollar amount', data: `$${data.amount}`},
      {title: 'Bitcoin you will receive', data: this.dollarToBitcoin(this.props.bitcoinPrice, data.amount)},
      {title: 'Your email', data: `${data.email}`},
      {title: 'Your bitcoin address', data: `${data.bitcoinAddress}`},
      {title: 'Your phone number', data: `${data.phoneNumber}`}
    ]
    return (
      <div className="root">
        <header>
          <TransactionHeaderBox title="Confirmation" subTitle="Make sure your info is correct" />
        </header>
        <div className="container">
          {this.state.error === 'normal' ? <StateNormal confirmationData={confirmationData} handleSubmit={this.handleSubmit} /> : null }
          {this.state.error === 'loading' ? <StateLoading /> : null }
          {this.state.error === 'success' ? <StateSuccess /> : null }
        </div>
      <style jsx>{`
        .container {
          padding: 0 ${s.m10};
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
        .confirmation-field-data-bitcoin {
          font-weight: 600;
          font-size: ${s.m9}
        }
      `}</style>
      </div>
    )
  }
}

export default compose(
  // withData gives us server-side graphql queries before rendering
  withData,
  // withApollo exposes `this.props.client` used when logging out
  withApollo,
  graphql(
    // The `createUser` & `signinUser` mutations are provided by graph.cool by
    // default.
    // Multiple mutations are executed by graphql sequentially
    gql`
    mutation Create($amount: Int!, $bitcoinAddress: String!, $userId: ID!, $phoneNumber: String!) {
      createTransaction	(amountDollar: $amount, bitcoinAddress: $bitcoinAddress, userId: $userId, phoneNumber: $phoneNumber ) {
  	     id
	     }
    }
    `,
    {
      // Use an unambiguous name for use in the `props` section below
      name: 'createTransaction',
      // Apollo's way of injecting new props which are passed to the component
      props: ({
        createTransaction,
        // `client` is provided by the `withApollo` HOC
        ownProps: { client }
      }) => ({
        // `create` is the name of the prop passed to the component
        create: (data, stateChanger, onSubmit) => {
          stateChanger('loading')
          createTransaction({
            variables: {
              amount: Math.round(data.amount),
              userId: data.userId,
              bitcoinAddress: data.bitcoinAddress,
              phoneNumber: data.phoneNumber
            }
          }).then(({ data: { createTransaction: { id } } }) => {

            client.resetStore().then(() => {
              _.delay(stateChanger, 2000, 'success');
              redirect({}, `/buy-bitcoin?payment=${id}`);
              _.delay(onSubmit, 3000);
            })
          }).catch((error) => {
            console.error(error)
          })
        }
      })
    }
  )
)(TransactionInfo)

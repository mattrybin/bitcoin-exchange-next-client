import Link from 'next/link'
import { c, s, l, m } from '../lib/theme'

import fetchBitcoinPrice from '../lib/bitcoin'
import HeaderTransaction from './elements/header-transaction'
import TransactionAmount from './elements/transaction-amount'
import TransactionLogin from './elements/transaction-login'
import TransactionPhone from './elements/transaction-phone'
import TransactionBitcoinAddress from './elements/transaction-bitcoin-address'
import TransactionInfo from './elements/transaction-info'
import TransactionPayment from './elements/transaction-payment'
import TransactionConfirmation from './elements/transaction-confirmation'
import TransactionSuccess from './elements/transaction-success'

class Transaction extends React.Component {
  CONTACT_FORM_DEFAULTS = {
    amount: 0,
    userId: '',
    email: '',
    phoneNumber: '',
    bitcoinAddress: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      payment: {...this.CONTACT_FORM_DEFAULTS},
      step: 1,
      bitcoinPrice: 1000,
    }
    this.paymentChanged = this.paymentChanged.bind(this);
    this.stepIncrement = this.stepIncrement.bind(this);
  }

  componentDidMount() {
    this.getBitcoinPrice()
    this.timer = setInterval(()=> this.getBitcoinPrice(), 20000)
  }

  async getBitcoinPrice() {
    fetchBitcoinPrice().then(value => {
      console.log(value)
      this.setState({
        bitcoinPrice: value
      })
    }, reason => {
      console.log(reason)
    })
  }


  paymentChanged(name, value) {
    this.setState(({payment}) => ({ payment: {
		...payment,
		[name]: value
      }
  	}))
  }

  stepIncrement(event) {
    this.setState({
      step: this.state.step + 1
    })
  }

  render() {
    const {payment, bitcoinPrice, step} = this.state
    return (
      <div className="root">
        <div className="header">
          <HeaderTransaction dollar={payment.amount} step={step} />
        </div>
        <div className="container">
          {this.state.step === 1 ? <TransactionAmount data={payment} bitcoinPrice={bitcoinPrice} onChange={this.paymentChanged} onSubmit={this.stepIncrement} /> : null}
          {this.state.step === 2 ? <TransactionLogin data={payment} onChange={this.paymentChanged} onSubmit={this.stepIncrement} /> : null}
          {this.state.step === 3 ? <TransactionBitcoinAddress data={payment} onChange={this.paymentChanged} onSubmit={this.stepIncrement} /> : null}
          {this.state.step === 4 ? <TransactionPhone data={payment} onChange={this.paymentChanged} onSubmit={this.stepIncrement} /> : null}
          {this.state.step === 5 ? <TransactionInfo data={payment} bitcoinPrice={bitcoinPrice} onChange={this.paymentChanged} onSubmit={this.stepIncrement} /> : null}
          {this.state.step === 6 ? <TransactionPayment data={payment} bitcoinPrice={bitcoinPrice} onChange={this.paymentChanged} onSubmit={this.stepIncrement} /> : null}
          {this.state.step === 7 ? <TransactionConfirmation data={payment} bitcoinPrice={bitcoinPrice} onSubmit={this.stepIncrement} /> : null}
          {this.state.step === 8 ? <TransactionSuccess data={payment} bitcoinPrice={bitcoinPrice} onSubmit={this.stepIncrement} /> : null}
        </div>
        <style jsx>{`
          .root {
            background-color: #F5FAFE;
            min-height: 100vh;
            padding-bottom: ${s.m10};
          }
        `}</style>
      </div>
    )
  }
}

export default Transaction

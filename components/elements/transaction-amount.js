import { c, s, l, m } from '../../lib/theme'
import { object,func } from 'prop-types'
import Form from 'react-validify'
import Link from 'next/link'

import Input from './input'
import Submit from './submit'

import TransactionHeaderBox from './transaction-header-box'
import DollarToBitcoin from './dollar-to-bitcoin'

class TransactionAmount extends React.Component {
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
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
	const name = target.name;

    this.props.onChange(name, value)
  }

  handleSubmit(event) {
    this.props.onSubmit()
  }

  dollarToBitcoin(bitcoinValue, dollarAmount) {
    return (dollarAmount / bitcoinValue).toFixed(4)
  }

  render() {
    const data = this.props.data;
    const {bitcoinPrice} = this.props
    return (
      <div className="root">
        <header>
          <TransactionHeaderBox title="Input Amount" subTitle="Amount of dollars you want to spend" />
        </header>
        <div className="container">
          <Form
            rules={{
              amount: 'max:500|min:50|numeric|required'
            }}
            errorMessages={{
            'min.amount': 'The minimum buying amount is $50',
            'max.amount': 'The maximum buying amount is $500'
            }}>
            <Input
              label="Your dollar amount"
              type="number"
              name="amount"
			        onInput={this.fieldChange} />
            <DollarToBitcoin bitcoinPrice={bitcoinPrice} dollarAmount={data.amount}/>
            <Submit submit value="Buy Bitcoin" onClick={this.handleSubmit} />
          </Form>
        </div>
      <style jsx>{`
        .container {
          padding: 0 ${s.m10};
        }
      `}</style>
      </div>
    )
  }
}

export default TransactionAmount

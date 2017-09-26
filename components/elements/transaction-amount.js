import { c, s, l, m } from '../../lib/theme'
import Link from 'next/link'
import { object,func } from 'prop-types'

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
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.props.onChange(value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  dollarToBitcoin(bitcoinValue, dollarAmount) {
    return  (dollarAmount / bitcoinValue).toFixed(4)
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
          <form>
            <Input label="Your dollar amount" type="number" name="amount" onChange={this.fieldChange} />
            <DollarToBitcoin bitcoinPrice={bitcoinPrice} dollarAmount={data.amount}/>
            <Submit value="Buy Bitcoin" onClick={this.handleSubmit} />
          </form>
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

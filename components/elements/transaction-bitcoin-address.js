import { c, s, l, m } from '../../lib/theme'
import Link from 'next/link'
import { object,func } from 'prop-types'

import Input from './input'
import Submit from './submit'

import TransactionHeaderBox from './transaction-header-box'

class TransactionBitcoinAddress extends React.Component {
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
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    let data = this.props.data;
    return (
      <div className="root">
        <header>
          <TransactionHeaderBox title="Add Bitcoin Address" subTitle="The address we will send your money to" />
        </header>
        <div className="container">
          <form>
            <Input label="Your bitcoin address" type="text" name="bitcoin-address" onChange={this.fieldChange} />
            <Submit value="Add Bitcoin Address" onClick={this.handleSubmit} />
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

export default TransactionBitcoinAddress

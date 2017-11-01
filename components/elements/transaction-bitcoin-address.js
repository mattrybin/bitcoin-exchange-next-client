import { c, s, l, m } from '../../lib/theme'
import Link from 'next/link'
import { object,func } from 'prop-types'
import Form from 'react-validify'

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
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
	const name = target.name;

    this.props.onChange(name, value)
  }

  handleSubmit(event) {
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
          <Form
            rules={{
              bitcoinAddress: "regex:/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/"
            }}
            errorMessages={{
            'regex.bitcoinAddress': 'You need to input a valid bitcoin address',
            }}>
            <Input label="Your bitcoin address" type="text" name="bitcoinAddress" onInput={this.fieldChange} />
            <Submit submit value="Add Bitcoin Address" onClick={this.handleSubmit} />
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

export default TransactionBitcoinAddress

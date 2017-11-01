import { c, s, l, m } from '../../lib/theme'
import Link from 'next/link'
import { object,func } from 'prop-types'
import Form from 'react-validify'

import Input from './input'
import Submit from './submit'

import TransactionHeaderBox from './transaction-header-box'

class TransactionPhone extends React.Component {
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
          <TransactionHeaderBox title="Add Phone Number" subTitle="We need to send WING payment" />
        </header>
        <div className="container">
          <Form
            rules={{
              phoneNumber: 'numeric|required'
            }}>
            <Input label="Your phone number" type="number" name="phoneNumber" onInput={this.fieldChange} />
            <Submit submit value="Add Phone Number" onClick={this.handleSubmit} />
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

export default TransactionPhone

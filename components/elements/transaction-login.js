import { c, s, l, m } from '../../lib/theme'
import Link from 'next/link'
import { object,func } from 'prop-types'

import Input from './input'
import Submit from './submit'

import TransactionHeaderBox from './transaction-header-box'

class TransactionLogin extends React.Component {
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
          <TransactionHeaderBox title="Log In" subTitle="Log In to your account" />
        </header>
        <div className="container">
          <form>
            <Input label="Your Email" type="email" name="email" onChange={this.fieldChange} />
            <Input label="Your Password" type="password" name="password" onChange={this.fieldChange} />
            <Submit value="Login" onClick={this.handleSubmit} />
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

export default TransactionLogin

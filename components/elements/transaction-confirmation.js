import { c, s, l, m } from '../../lib/theme'
import Link from 'next/link'
import { object,func } from 'prop-types'

import Input from './input'
import Submit from './submit'

import TransactionHeaderBox from './transaction-header-box'

class TransactionConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    data: object.isRequired,
    onSubmit: func.isRequired
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  dollarToBitcoin(bitcoinValue, dollarAmount) {
    return  (dollarAmount / bitcoinValue).toFixed(4)
  }

  render() {
    let data = this.props.data;
    return (
      <div className="root">
        <header>
          <TransactionHeaderBox title="Thank You!" subTitle="Our staff will now manually check your Wing Payment. We will send your funds within 24 hours of receiving your payment." />
        </header>
        <div className="container">
          <div className="confirmation">
            <div className="confirmation-box">
              <div className="confirmation-field">
                <div className="confirmation-field-title">
                  <span>Your Payment ID</span>
                </div>
                <div className="confirmation-field-data">
                  <span>320 420 053 430</span>
                </div>
              </div>
              <div className="confirmation-field">
                <div className="confirmation-field-title">
                  <span>Your dollar amount</span>
                </div>
                <div className="confirmation-field-data">
                  <span>${data.amount}</span>
                </div>
              </div>
              <div className="confirmation-field">
                <div className="confirmation-field-title">
                  <span>Your email</span>
                </div>
                <div className="confirmation-field-data">
                  <span>demo@demo.com</span>
                </div>
              </div>
              <div className="confirmation-field">
                <div className="confirmation-field-title">
                  <span>Your Bitcoin Address</span>
                </div>
                <div className="confirmation-field-data">
                  <span>1Mz7153HMuxXTuR2R1</span>
                </div>
              </div>
              <div className="confirmation-field">
                <div className="confirmation-field-title">
                  <span>Your Phone Number</span>
                </div>
                <div className="confirmation-field-data">
                  <span>073 323 953 32</span>
                </div>
              </div>
            </div>
          </div>
          <form>
            <Submit value="Go to Success Page" onClick={this.handleSubmit} />
          </form>
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
      `}</style>
      </div>
    )
  }
}

export default TransactionConfirmation

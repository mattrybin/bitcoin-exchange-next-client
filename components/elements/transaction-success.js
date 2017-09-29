import { c, s, l, m } from '../../lib/theme'
import { object,func } from 'prop-types'

import Input from './input'
import Submit from './submit'

import TransactionHeaderBox from './transaction-header-box'

class TransactionSuccess extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    data: object.isRequired,
  }

  dollarToBitcoin(bitcoinValue, dollarAmount) {
    return  (dollarAmount / bitcoinValue).toFixed(4)
  }

  render() {
    let data = this.props.data;
    return (
      <div className="root">
        <header>
          <TransactionHeaderBox title="Successful Payment" subTitle="We have received your payment and send the Bitcoin to your bitcoin address." />
        </header>
        <div className="container">
          <div className="confirmation-box">
            <div className="confirmation-field">
              <div className="confirmation-field-title">
                <span>Dollars we received:</span>
              </div>
              <div className="confirmation-field-data">
                <span>${data.amount}</span>
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
            <div className="confirmation-field">
              <div className="confirmation-field-title">
                <span>Time we received your Wing payment:</span>
              </div>
              <div className="confirmation-field-data">
                <span>2017-11-23 at 14.20</span>
              </div>
            </div>
            <div className="confirmation-field">
              <div className="confirmation-field-title">
                <span>Bitcoin price at that time:</span>
              </div>
              <div className="confirmation-field-data">
                <span>1 Bitcoin = $3290</span>
              </div>
            </div>
            <div className="confirmation-field">
              <div className="confirmation-field-title">
                <span>Bitcoin we send you:</span>
              </div>
              <div className="confirmation-field-data">
                <span>{this.dollarToBitcoin(3290, data.amount)}</span>
              </div>
            </div>
            <div className="confirmation-field">
              <div className="confirmation-field-title">
                <span>Your email:</span>
              </div>
              <div className="confirmation-field-data">
                <span>demo@demo.com</span>
              </div>
            </div>
            <div className="confirmation-field">
              <div className="confirmation-field-title">
                <span>Your Phone Number:</span>
              </div>
              <div className="confirmation-field-data">
                <span>073 323 953 32</span>
              </div>
            </div>
          </div>
        </div>
      <style jsx>{`
        .container {
          padding: ${s.m12} ${s.m10} 0;
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

export default TransactionSuccess

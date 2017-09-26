import { c, s, l, m } from '../../lib/theme'
import { func,number,string } from 'prop-types'

class DollarToBitcoin extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    dollarAmount: number.isRequired,
    bitcoinPrice: number.isRequired
  }

  dollarToBitcoin(bitcoinValue, dollarAmount) {
    return  (dollarAmount / bitcoinValue).toFixed(4)
  }

  render() {
    const {bitcoinPrice, dollarAmount} = this.props
    return (
      <div className="root">
        <div className="container">
          <div className="title">
            <span>Bitcoin you will receive:</span>
          </div>
          <div className="amount">
            <span>{this.dollarToBitcoin(bitcoinPrice, dollarAmount)}</span>
          </div>
        </div>
      <style jsx>{`
        .root {
          padding: ${s.m8} 0;
        }
        .title {
          font-weight: 600;
          margin-bottom: ${s.m6};
        }
        .amount {
          font-size: ${s.m9};
          border-radius: 2px;
          background: #f8f8f8;
          border: 1px solid #D8D8D8;
          padding: ${s.m9};
        }
      `}</style>
      </div>
    )
  }
}

export default DollarToBitcoin

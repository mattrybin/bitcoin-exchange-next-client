
import { c, s, l, m } from '../../lib/theme'
import { func,number,string } from 'prop-types'

import fetchBitcoinPrice from '../../lib/bitcoin'

class LiveBitcoinPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bitcoinPrice: 0
    }
  }

  componentDidMount() {
    this.getBitcoinPrice()
    this.timer = setInterval(()=> this.getBitcoinPrice(), 30000)
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

  render() {
    const {bitcoinPrice, dollarAmount} = this.props
    return (
      <span className="root">
        {this.state.bitcoinPrice !== 0 ? `$${this.state.bitcoinPrice}` : 'Loading...'}
      <style jsx>{`
        .root {
          padding: ${s.m8} 0;
        }
      `}</style>
      </span>
    )
  }
}

export default LiveBitcoinPrice

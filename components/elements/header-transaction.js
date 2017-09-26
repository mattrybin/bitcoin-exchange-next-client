import Link from 'next/link'
import { c, s, l, m } from '../../lib/theme'
import HeaderTransactionProgress from './header-transaction-progress'

class HeaderTransaction extends React.Component {
  constructor(props) {
    super(props)
  }

  dollarText(dollar, step) {
    if (step !== 1) {
      return `for $${dollar}`
    }
  }

  render() {
    return (
      <div className="root">
        <div className="container">
          <div className="header-top">
            <div className="price">
              <span className="price-title">Cryptoasia</span>
            </div>
            <Link href="/">
              <div className="menu">
                  <span className="menu-title">CLOSE</span>
                <img src="static/mobile-menu-close.svg" width="12" height="10" alt="React" />
              </div>
            </Link>
          </div>
          <div className="header-bottom">
            <div className="brand">
              <span className="brand-title">Buy Bitcoin {this.dollarText(this.props.dollar, this.props.step)}</span>
            </div>
          </div>
          <HeaderTransactionProgress step={this.props.step} />
        </div>
        <style jsx>{`
          .root {
            color: #222;
          }

          .container {
          }

          .header-top {
            color: #FAFAFA;
            background: ${c.darkSecond};
            font-size: 0;
            padding: 11px 0 10px;
          }

          .price, .menu {
            display: inline-block;
            font-size: ${s.m9};
            font-weight: 600;
          }

          .menu {
            width: 35%;
            padding-right: ${s.m9};
            text-align: right;
          }
          .menu img {
            margin-left: ${s.m5};
            vertical-align: 0px;
          }

          .price {
            width: 65%;
            padding-left: ${s.m9};
          }

          .brand {
            background: ${c.darkFirst};
            padding: 16px 0;
            text-align: center;
            display: block;
            color: ${c.actionFirst};
            text-decoration: none;
            border-top: ${c.darkBorder} 1px solid;
            border-bottom: ${c.darkBorder} 1px solid;
          }

          .brand img {
            vertical-align: -4px;
            margin-right: 8px;
          }

          .brand-title {
            font-size: ${s.m11};
            font-weight: 600;
            margin-right: 8px;
          }

          .brand-txt {
            vertical-align: 2px;
            font-size: ${s.m8};
            display: none;
          }

          .header-extra {
            background: ${c.darkFirst};
            font-size: 0;
          }

          .header-extra a {
            font-size: ${s.m9};
            text-align: center;
            font-weight: 600;
            display: inline-block;
            width: 50%;
            text-decoration: none;
            color: white;
            padding: 8px 0;
            border-right: 1px solid ${c.darkBorder};
            border-top: 2px solid ${c.darkFirst}; /* aliment fix */
            border-bottom: 2px solid #111;
          }

          .header-extra a:hover {
            border-bottom: 2px solid #FABB3D;
            color: #FABB3D;
          }

          .header-extra a:last-child {
            border-right: 0;
          }
        `}</style>
      </div>
    )
  }
}
export default HeaderTransaction

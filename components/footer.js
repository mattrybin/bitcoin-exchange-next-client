import Link from 'next/link'
import { c, s, l, m } from '../lib/theme'

class Footer extends React.Component {
  render() {
    return (
      <footer className="root">
        <div className="container">
          <div className="list-wrap">
            <div className="list">
              <div className="list-header">
                <span>Guides</span>
              </div>
              <ul className="list-container">
                <li>Get Started with Bitcoin</li>
                <li>Wallet Guide</li>
                <li>Cambodia Guide</li>
                <li>Scam Advisory</li>
              </ul>
            </div>
            <div className="list">
              <div className="list-header">
                <span>Products</span>
              </div>
              <ul className="list-container">
                <li>Buy Bitcoin</li>
                <li>Sell Bitcoin</li>
                <li>Cryptoasia Trading</li>
                <li>Coin Cafe</li>
              </ul>
            </div>
            <div className="list">
              <div className="list-header">
                <span>Support</span>
              </div>
              <ul className="list-container">
                <li>About Cryptoasia</li>
                <li>Cryptoasia FAQs</li>
                <li>Terms and Conditions</li>
                <li>Support</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="logo">
              <div className="logo-img">
                <img src="static/logo.svg" alt=""/>
              </div>
              <div className="logo-title">
                <span>Cryptoasia</span>
              </div>
              <div className="logo-sub-title">
                <span>Bitcoin Exchange</span>
                <span>in Cambodia</span>
              </div>
            </div>
          </div>


          <div className="copy">
            <span>© Copyright Cryptoasia Co. All Rights Reserved</span>
          </div>
        </div>
        <style jsx>{`
          .root {
            background: ${c.darkSecond};
            color: ${c.baseWhite};
          }

          .container {
            margin: 0 auto;
            padding: ${s.m14} 0 0;
            border-top: 2px solid #000;
          }

          .list-wrap {
            margin: 0 auto;
            width: ${s.m20};
          }

          .list-header span {
            font-size: ${s.m11};
            font-weight: 600;
            color: ${c.actionFirst};
            letter-spacing: ${l.spacingMedium};
          }

          .list-container {
            list-style: none;
            padding-left: 0;
            margin: ${s.m5} 0 ${s.m10}
          }

          .list-container li {
            font-weight: 500;
            line-height: ${s.m12};
            letter-spacing: ${l.spacingMedium};
          }

          .logo {
            padding: ${s.m10} 0;
            text-align: center;
          }

          .logo-img img {
            width: ${s.m15};
          }

          .logo-title {
            margin-top: ${s.m6};
            font-size: ${s.m12};
            font-weight: 600;
            letter-spacing: ${l.spacingMedium};
          }


          .logo-sub-title span {
            display: inline-block;
            width: 100%;
            font-weight: 500;
            letter-spacing: ${l.spacingMedium};
          }

          .copy {
            margin-top: ${s.m10};
            background: ${c.darkSecond};
            padding: ${s.m8};
            font-size: ${s.m8};
            text-align: center;
            border-top: #111 1px solid;
            border-bottom: ${c.darkBorder} 1px solid;
            letter-spacing: ${l.spacingMedium};
          }
          @media all and (min-width: ${s.m25}) {
            .list-wrap {
              margin: 0 auto;
              width: auto;
              text-align: center;
            }
            .list {
              text-align: left;
              display: inline-block;
              vertical-align: top;
              padding: 0 ${s.m11};
            }
          }
          @media all and (min-width: ${s.m26}) {
            .logo {
              display: inline-block;
            }
          }
        `}</style>
      </footer>
    )
  }
}

export default Footer

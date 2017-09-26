import { c, s, l, m } from '../../lib/theme'
import Link from 'next/link'

export default () => (
  <div className="header-bottom">
    <Link href="/">
      <a className="brand">
        <img src="/static/logo.svg" alt="Logo" />
        <span className="brand-title">Cryptoasia</span>
        <span className="brand-title-full">Cryptoasia</span>
        <span className="brand-title-hr"></span>
        <span className="brand-subtitle">Bitcoin Exchange in Cambodia</span>
      </a>
    </Link>
    <div className="buttons">
      <Link href="/buy-bitcoin">
        <a id="buy-bitcoin" className="buy-bitcoin">
          <span className="buy-text">Buy Bitcoin</span>
        </a>
      </Link>
      <div className="sell-bitcoin">
        <span className="sell-txt">Sell Bitcoin</span>
      </div>
    </div>
    <style jsx>{`
      .header-bottom {
        background: ${c.darkFirst};
        padding: 16px 0;
        border-top: ${c.darkBorder} 1px solid;
        border-bottom: ${c.darkBorder} 1px solid;
        letter-spacing: ${l.spacingLarge};
      }
      .brand {
        text-align: center;
        display: block;
        color: ${c.baseWhite};
        text-decoration: none;
      }

      .brand:hover {
        color: ${c.actionFirst};
        cursor: pointer;
      }
      .brand:active {
        color: ${c.actionBorder};
      }

      .brand img {
        vertical-align: -11px;
        margin-right: 12px;
      }
      .brand-title-full,
      .brand-title-hr,
      .brand-subtitle {
        display: none;
      }

      .brand-title,
      .brand-title-full {
        font-size: ${s.m11};
        font-weight: 600;
      }
      .buttons {
        display:  none;
      }
      @media all and (min-width: ${s.m25}) {
        .buttons, .brand {
          display: inline-block;
          width: 50%;
        }
        .brand {
          text-align: left;
          padding-left: ${s.m10};
        }
        .buttons {
          font-size: 0;
          text-align: right;
          padding-right: ${s.m10};
          letter-spacing: ${l.spacingMedium};
        }
        .buy-bitcoin, .sell-bitcoin {
          font-size: ${s.m10};
          display: inline-block;
          padding: ${s.m8} ${s.m10};
          background-color: ${c.actionFirst};
          border-radius: 4px;
          box-shadow: 0 2px 1px rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .buttons span {
          font-weight: 500;
          color: ${c.baseBlack};
        }
        .buy-bitcoin {
          margin-right: ${s.m12};
        }
        .buy-bitcoin:hover,
        .sell-bitcoin:hover {
          background-color: ${c.actionBorder};
          color: ${c.baseWhite};
        }
      }
      @media all and (min-width: ${s.m26}) {
        .brand {
          padding-left: ${s.m12};
        }
        .brand-title {
          display: none;
        }
        .brand-title-full,
        .brand-subtitle {
          display: inline;
        }
        .brand-title-hr {
          display: inline-block;
          border-radius: 2px;
          width: 12px;
          height: 3px;
          vertical-align: 4px;
          margin: 0 ${s.m8};
          background-color: ${c.actionFirst};
        }
        .buttons {
          padding-right: ${s.m12};
        }

      }
    `}</style>
  </div>
)

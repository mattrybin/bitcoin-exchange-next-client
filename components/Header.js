import Link from 'next/link'
import { c, s, l, m } from '../lib/theme'

export default ({ pathname }) => (
  <header className="root">
    <div className="container">
      <div className="header-top">
        <div className="price">
          <span className="price-title">Bitcoin Price: $2445</span>
        </div>
        <div className="menu">
            <span className="menu-title">MENU</span>
        </div>
      </div>
      <div className="header-bottom">
        <div className="brand">
          <span className="brand-title">Cryptoasia</span>
        </div>
      </div>
      <div className="header-extra">
        <div className="buy-bitcoin">
          <span className="buy-text">Buy Bitcoin</span>
        </div>
        <div className="sell-bitcoin">
          <span className="sell-txt">Sell Bitcoin</span>
        </div>
      </div>
    </div>

    <style jsx>{`
      .root {
        color: ${c.baseBlack};
      }

      .header-top {
        color: #FAFAFA;
        background: ${c.darkSecond};
        font-size: 0;
        padding: 11px 0 10px;
        letter-spacing: ${l.spacingMedium};
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
        color: ${c.baseWhite};
        text-decoration: none;
        border-top: ${c.darkBorder} 1px solid;
        border-bottom: ${c.darkBorder} 1px solid;
        letter-spacing: ${l.spacingLarge};
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
        border-top: ${m.containerBorderSize} solid ${c.darkFirst}; /* aliment fix */
        border-bottom: ${m.containerBorderSize} solid #111;
        letter-spacing: ${l.spacingLarge};
      }

      .header-extra a:hover {
        border-bottom: ${m.containerBorderSize} solid #FABB3D;
        color: #FABB3D;
      }

      .header-extra a:last-child {
        border-right: 0;
      }
    `}</style>
  </header>
)

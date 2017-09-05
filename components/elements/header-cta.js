import { c, s, l, m } from '../../lib/theme'
import Link from 'next/link'

export default () => (
  <div className="header-extra">
    <Link href="/buy-bitcoin">
      <div className="buy-bitcoin">
        <span className="buy-text">Buy Bitcoin</span>
      </div>
    </Link>
    <Link href="/buy-bitcoin">
      <div className="sell-bitcoin">
        <span className="sell-txt">Sell Bitcoin</span>
      </div>
    </Link>
    <style jsx>{`
      .header-extra {
        background: ${c.darkFirst};
        font-size: 0;
      }

      .buy-bitcoin,
      .sell-bitcoin {
        font-size: ${s.m9};
        display: inline-block;
        width: 50%;
        text-align: center;
        color: ${c.baseWhite};
        padding: 8px 0;
        border-top: ${m.containerBorderSize} solid ${c.darkFirst}; /* aliment fix */
        border-bottom: ${m.containerBorderSize} solid #111;
        border-right: 1px solid ${c.darkBorder};
        cursor: pointer;
      }

      .buy-bitcoin:hover,
      .buy-bitcoin:focus,
      .sell-bitcoin:hover,
      .sell-bitcoin:focus {
        color: ${c.actionFirst};
        border-bottom: ${m.containerBorderSize} solid ${c.actionFirst};
      }

      .buy-bitcoin:active,
      .sell-bitcoin:active {
        color: ${c.actionBorder};
        border-bottom: ${m.containerBorderSize} solid ${c.actionBorder};
      }


      .header-extra:last-child {
        border-right: 0;
      }

      .header-extra span {
        font-weight: 600;
        text-decoration: none;
        letter-spacing: ${l.spacingLarge};
      }
      @media all and (min-width: ${s.m25}) {
        .header-extra {
          display: none;
        }
      }
    `}</style>
  </div>
)

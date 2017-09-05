import { c, s, l, m } from '../../lib/theme'
import Link from 'next/link'

const MobileMenu = ({menuItems, openMobileMenu }) => (
  <div className="container">
    {menuItems.map(( item, index ) => {
      return (
        <Link key={index} href={item.link}>
          <a className="item">
            <img src={`/static/${item.icon}.svg`} alt={item.text} />
            <span>{item.text}</span>
          </a>
        </Link>
      )
    })}
    <style jsx>{`
      .container {
        background-color: ${c.darkSecond};
        border-top: 2px solid ${c.actionFirst};
        border-bottom: 2px solid ${c.actionFirst};
      }
      @media all and (min-width: ${s.m25}) {
        .container {
          display: none;
        }
      }
      .item {
        display: block;
        font-weight: 500;
        color: ${c.actionFirst};
        text-decoration: none;
        padding: ${s.m9} ${s.m12};
        border-bottom: 1px solid ${c.darkFirst};
      }

      .item img {
        margin-right: ${s.m10};
        width: ${s.m10};
        vertical-align: -1px;
      }

      .item:last-child {
        border-bottom: none;
      }

      .item:hover,
      .item:focus {
        background-color: ${c.darkFirst};
        outline: none;
        color: #fff;
      }

      .item:active {
        background-color: ${c.actionFirst};
        color: ${c.darkFirst};
      }
    `}</style>
  </div>
)

export default ({menuItems, isOpen, openMobileMenu}) => (
  <div className="header-top-wrapper">
    <div className="header-top">
      <div className="price">
        <span className="price-title">Bitcoin Price: $2445</span>
      </div>
      <div className="mobile-menu" onClick={openMobileMenu}>
        <span className="menu-title">{isOpen ? "CLOSE" : "MENU"}</span>
        {isOpen ?
          <img className="close-icon" src="/static/mobile-menu-close.svg" alt="Close Icon" />
          :
          <img src="/static/mobile-menu-burger.svg" alt="Burger Menu Icon" />
        }
      </div>
      <div className="full-menu">
        {menuItems.map(( item, index ) => {
          return (
            <Link key={index} href={item.link}>
              <a className={item.text !== "Login" ? "full-menu-item" : "full-menu-item-login"}>
                {item.text === "Login" ? <img src="/static/full-menu-lock.svg" alt="Lock" /> : null }
                <span>{item.text}</span>
              </a>
            </Link>
          )
        })}
      </div>
    </div>

    {isOpen ? <MobileMenu menuItems={menuItems} openMobileMenu={openMobileMenu} /> : null }

    <style jsx>{`
      .header-top {
        color: #FAFAFA;
        background: ${c.darkSecond};
        font-size: 0;
        padding: 11px 0 10px;
        letter-spacing: ${l.spacingMedium};
      }

      .price, .mobile-menu, .full-menu {
        display: inline-block;
        font-size: ${s.m9};
        font-weight: 600;
      }

      .mobile-menu, .full-menu {
        width: 35%;
        padding-right: ${s.m9};
        text-align: right;
      }
      .mobile-menu img {
        margin-left: ${s.m5};
        vertical-align: 0px;
      }

      .price {
        width: 65%;
        padding-left: ${s.m9};
      }

      .close-icon path {
        fill: blue!important;
      }

      .full-menu {
        display: none;
      }

      @media all and (min-width: ${s.m25}) {
        .mobile-menu {
          display: none;
        }
        .price {
          width: 30%;
        }
        .full-menu {
          width: 70%;
          display: inline-block;
        }
        .full-menu-item, .full-menu-item-login {
          color: white;
          text-decoration: none;
          padding-left: ${s.m10};
        }
        .full-menu-item:hover {
          color: ${c.actionFirst};
        }
        .full-menu-item-login:hover {
          color: ${c.baseWhite};
        }
        .full-menu-item-login {
          color: ${c.actionFirst};
          border-left: 2px solid ${c.darkFirst};
          padding-left: ${s.m8};
          margin-left: ${s.m8};
        }
        .full-menu-item-login img {
          width: 12px;
          vertical-align: -1px;
          margin-right: ${s.m6};
        }
      }
      @media all and (min-width: ${s.m26}) {
        .header-top {
          padding: ${s.m9} 0;
        }
        .price {
          padding-left: ${s.m12};
        }
        .full-menu {
          padding-right: ${s.m12};
        }
      }

    `}</style>
  </div>
)

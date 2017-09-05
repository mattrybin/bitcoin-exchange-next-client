import cookie from 'cookie'
import { withApollo, compose } from 'react-apollo'
import { c, s, l, m } from '../lib/theme'

import App from '../components/App'
import Head from '../components/head'
import Header from '../components/Header'
import TransactionList from '../components/TransactionList'
import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/check-logged-in'
import withData from '../lib/with-data'

class Index extends React.Component {
  render () {
    return (
      <App>
        <Head title="Index" />
        <Header />
        <div className="container">
          <IntroModule />
          <StartModule />
          <InfoModule />
        </div>
        <style jsx>{`
          .container {
            margin: 0 auto;
            padding: 0 0 48px;
          }
        `}</style>
      </App>
    )
  }
}

const IntroModule = () => (
  <div className="intro">
    <div className="intro-left">
      <div className="intro-country">
        <span>Inside Cambodia</span>
      </div>
      <div className="intro-title">
        <span>Buy, Sell Bitcoin</span>
        <span>Simply & Securely</span>
      </div>
      <div className="intro-easy">
        <img src="/static/clock.svg" alt="Clock Icon" />
        <span>It’s easy to setup your free account, and you will be able to exhange in no time.</span>
      </div>
      <div className="intro-security">
        <span className="intro-security-title">Security</span>
        <img src="/static/shield.svg" alt="Shield Icon" />
        <p>All your data is encrypted with a 256-bit encryption and the data exchanged with with us is encrypted with 256-bit SSL.</p>
      </div>
      <div className="intro-cta">
        <a href="#"><span>Buy Bitcoin</span></a>
      </div>
      <div className="intro-security-badge">
        <img src="/static/ssl-badge.svg" alt="SSL Badge" />
      </div>
    </div>
    <div className="intro-right">
      <div className="box"></div>
    </div>
    <style jsx>{`
      .intro-easy img,
      .intro-security img {
        display: none;
      }

      .intro {
        padding-left: ${s.m9};
        padding-right: ${s.m9};
        margin-top: ${s.m12};
        margin-bottom: ${s.m14};
      }
      .intro-country {
        text-align: center;
      }

      .intro-country span {
        font-size: ${s.m11};
        font-weight: 600;
        color: ${c.lightFirst};
      }

      .intro-title {
        text-align: center;
        margin-top: ${s.m4};
        margin-bottom: ${s.m5};
      }

      .intro-title span {
        color: ${c.darkBorder};
        display: inline-block;
        font-size: ${s.m12};
        font-weight: 600;
        width: 100%;
        line-height: 34px;
      }

      .intro-easy {
        text-align: center;
        padding: 0 ${s.m12};
        width: ${s.m21};
        margin: 0 auto;
      }

      .intro-security {
        padding: 0 ${s.m12};
        text-align: center;
        width: ${s.m21};
        margin: ${s.m10} auto 0;
      }

      .intro-security-title {
        font-size: ${s.m11};
        font-weight: 600;
        color: ${c.darkBorder};
      }

      .intro-security p {
        margin-top: ${s.m4};
      }

      .intro-cta {
        text-align: center;
        margin: ${s.m12} 0;
      }

      .intro-cta a {
        text-decoration: none;
        color: ${c.darkBorder};
        box-shadow: 0 2px 4px rgba(0,0,0,0.15);
        display: inline-block;
        width: ${s.m19};
        padding: ${s.m6} 0;
        background: ${c.actionFirst};
        border: ${c.actionBorder} solid 1px;
        border-radius: 4px;
        font-weight: 600;
        font-size: ${s.m11};
      }

      .intro-security-badge {
        text-align: center;
        padding: ${s.m4};
      }

      .intro-security-badge img {
        width: ${s.m18};
      }

      @media all and (min-width: ${s.m25}) {
        .intro-security-title {
          display: none;
        }


        .intro-easy img,
        .intro-security img {
          display: inline-block;
        }

        .intro {
          font-size: 0;
          margin-top: ${s.m14};
          margin-bottom: ${s.m15};
        }

        .intro-country {
        }

        .intro-country span {
          font-size: ${s.m12};
          font-weight: 600;
          color: ${c.lightFirst};
        }

        .intro-title {
          text-align: center;
          margin-top: ${s.m4};
          margin-bottom: ${s.m5};
        }

        .intro-title span {
          color: ${c.darkBorder};
          display: inline-block;
          font-size: ${s.m13};
          font-weight: 600;
          width: 100%;
          line-height: ${s.m14};
        }


        .intro-left,
        .intro-right {
          font-size: ${s.m11};
          width: 100%;
          display: inline-block;
        }
        .intro-easy,
        .intro-security {
          text-align: left;
          padding: 0 ${s.m12};
          width: ${s.m23};
          margin: ${s.m12} auto;
        }

        .intro-easy p,
        .intro-security p {
          overflow: hidden;
        }

        .intro-easy img,
        .intro-security img {
          width: 76px;
          margin-right: ${s.m9};
          float: left;
        }
      }
    `}</style>
  </div>
)

const StartModule = () => (
  <div className="start">
    <div className="start-header">
      <span>Get Started With Bitcoin</span>
    </div>

    <div className="start-box first">
      <div className="start-box-step">
        <span>Step 1</span>
      </div>
      <div className="start-box-container">
        <div className="start-box-title">
          <span>Get a Wallet</span>
        </div>
        <div className="start-box-text">
          <p>To buy Bitcoin you will need a Bitcoin Wallet.</p>
          <p>Read our easy step by step guide to learn more.</p>
        </div>
        <div className="start-box-button">
          <a href="#"><span>Wallet Guide</span></a>
        </div>
      </div>
    </div>

    <div className="start-box">
      <div className="start-box-step">
        <span>Step 2</span>
      </div>
      <div className="start-box-container">
        <div className="start-box-title">
          <span>Money in Cambodia</span>
        </div>
        <div className="start-box-text">
          <p>Buy Bitcoin with a bank account or online money transfer service.</p>
          <p>guide for foreigners and natives born people.</p>
        </div>
        <div className="start-box-button">
          <a href="#"><span>Cambodia Guide</span></a>
        </div>
      </div>
    </div>

    <div className="start-box last">
      <div className="start-box-step">
        <span>Step 3</span>
      </div>
      <div className="start-box-container">
        <div className="start-box-title">
          <span>Buy Bitcoin</span>
        </div>
        <div className="start-box-text">
          <p>You have a wallet and a way to transfer money.</p>
          <p>Click the button below and get started!</p>
        </div>
        <div className="start-box-button">
          <a href="#"><span>Buy Bitcoin</span></a>
        </div>
      </div>
    </div>
    <style jsx>{`
      .start {
        background: ${c.darkSecond};
        padding: ${s.m14} 0 ${s.m14};
        border-top: 2px solid ${c.darkBorder};
        border-bottom: 2px solid ${c.darkBorder};
      }

      .start-header {
        margin: 0 ${s.m9} ${s.m12};
        background: ${c.darkFirst};
        border-radius: 4px;
        border: 1px solid ${c.darkBorder};
        text-align: center;
      }

      .start-header span {
        display: inline-block;
        padding: ${s.m10} 0;
        font-weight: 600;
        color: ${c.actionFirst};
        font-size: ${s.m10};
        letter-spacing: ${l.spacingMedium};
      }

      .start-box {
        margin: 0 ${s.m9} ${s.m13};
        border-radius: 4px;
        border: ${c.darkBorder};
        max-width: ${s.m22};
      }

      .start-box:last-child {
        margin-bottom: 0;
      }

      .start-box-container {
        background: white;
        padding-bottom: ${s.m12};
        border-radius: 4px;
      }

      .start-box-step {
        width: 100%;
        display: block;
        background: ${c.darkFirst};
        text-align: center;
        border-radius: 4px 4px 0 0;
        border: 1px solid ${c.darkBorder};
        letter-spacing: ${l.spacingMedium};
      }

      .start-box-step span {
        padding: ${s.m8} 0;
        display: inline-block;
        font-weight: 600;
        color: ${c.baseWhite};
      }

      .start-box-title {
        text-align: center;
        padding: ${s.m10} ${s.m8} ${s.m6};
      }
      .start-box-title span {
        display: inline-block;
        font-size: ${s.m12};
        font-weight: 600;
      }

      .start-box-text {
        padding: 0 ${s.m14};
        text-align: center;
      }

      .start-box-text p {
        margin: 0;
        margin-bottom: ${s.m9};
        font-size: ${s.m10};
        font-weight: 500;
      }

      .start-box-button {
        text-align: center;
      }

      .start-box-button a {
        background: #FABB3D;
        text-decoration: none;
        box-shadow: 0 2px 4px rgba(0,0,0,0.30);
        display: block;
        border-radius: 4px;
        border: 1px solid #D39D33;
        margin: 0 ${s.m12};
      }

      .start-box-button span {
        padding: ${s.m10} 0;
        color: #222;
        font-weight: 600;
        display: inline-block;
        letter-spacing: ${l.spacingMedium};
      }
      @media all and (min-width: ${s.m25}) {
        .start {
          text-align: center;
          font-size: 0;
          padding: ${s.m14} ${s.m8} ${s.m14};
        }
        .start-header {
          margin: 0 auto ${s.m12};
          background: ${c.actionFirst};
          border: 1px solid ${c.darkBorder};
          width: ${s.m23};
        }

        .start-header span {
          display: inline-block;
          padding: ${s.m10} 0;
          font-weight: 600;
          color: ${c.darkFirst};
          font-size: ${s.m10};
          letter-spacing: ${l.spacingMedium};
        }

        .start-box {
          font-size: ${s.m10};
          margin: 0 0 ${s.m13};
          border-radius: 4px;
          border: ${c.darkBorder};
          display: inline-block;
          width: 33.3%;
        }

        .start-box-container {
          background: white;
          padding-bottom: ${s.m12};
          border-radius: 4px 4px 0 0;
        }

        .start-box.first .start-box-container {
          border-radius: 4px 0px 0 4px;
        }

        .start-box.last .start-box-container {
          border-radius: 0px 4px 4px 0px;
        }

        .start-box-title {
          text-align: center;
          padding: ${s.m10} ${s.m8} ${s.m6};
        }

        .start-box-title span {
          display: inline-block;
          font-size: ${s.m12};
          font-weight: 600;
        }

        .start-box-text {
          padding: 0 ${s.m13};
          text-align: center;
        }

        .start-box-text p {
          margin: 0;
          margin-bottom: ${s.m9};
          font-size: ${s.m10};
          font-weight: 500;
        }
      }
    `}</style>
  </div>
)

const InfoModule = () => (
  <div className="meetup">
    <div className="meetup-icon">
      <img src="/static/store-icon.svg" alt="Icon Store"/>
    </div>
    <div className="meetup-header">
      <span>Weekly Meetup</span>
    </div>
    <div className="meetup-title">
      <span>Phnom Penh</span>
    </div>
    <div className="meetup-text">
      <p>We have a Bitcoin meetup every monday in Brown 57 for all Bitcoin lovers in Cambodia.</p>
    </div>
    <div className="meetup-button">
      <a href="#">Sign Up on Meetup.com</a>
    </div>
    <style jsx>{`
      .meetup {
        padding: ${s.m14} 0 0;
      }

      .meetup-header {
        text-align: center;
      }

      .meetup-header span {
        color: ${c.lightFirst};
        letter-spacing: ${l.spacingLarge};
        font-weight: 600;
        font-size: ${s.m11};
        display: inline-block;
      }

      .meetup-icon {
        text-align: center;
        margin-bottom: ${s.m9};
      }

      .meetup-title {
        text-align: center;
      }

      .meetup-title span {
        display: inline-block;
        font-weight: 500;
        font-size: ${s.m11};
      }

      .meetup-text {
        text-align: center;
        margin: 0 auto;
        width: ${s.m21};
        margin-top: ${s.m4};
      }

      .meetup-text p {
        font-weight: 500;
        margin: 0;
      }

      .meetup-button {
        text-align: center;
        margin-top: ${s.m10};
      }
      .meetup-button a {
        padding: ${s.m10} ${s.m11};
        background: ${c.darkSecond};
        display: inline-block;
        text-decoration: none;
        color: ${c.actionFirst};
        font-size: ${s.m10}
        font-weight: 600;
        border-radius: 4px;
        border: 1px solid ${c.darkBorder};
      }
    `}</style>
  </div>
)


export default compose(
  // withData gives us server-side graphql queries before rendering
  withData,
  // withApollo exposes `this.props.client` used when logging out
  withApollo
)(Index)

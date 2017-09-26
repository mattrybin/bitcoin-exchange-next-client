import { c, s, l, m } from '../../lib/theme'
import Link from 'next/link'

const StepOne = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="step-wrapper">
          <div className="step-title">
            <span>Amount</span>
          </div>
        </div>
      </div>
      <div className="right-side">
        <span>Step 1/6</span>
      </div>
    <style jsx>{`
      .container {
        font-size: 0;
      }

      .left-side,
      .right-side {
        font-size: ${s.m10};
        display: inline-block;
      }
      .left-side {
        width: 70%;
      }

      .right-side {
        width: 30%;
        padding: ${s.m8} 0;
        padding-right: ${s.m9};
        text-align: right;
      }

      .right-side span {
        font-weight: 600;
      }

      .step-wrapper {
        font-size: 0;
      }

      .step,
      .step-title {
        margin-left: -4px;
        background-color: ${c.actionFirst};
        font-size: ${s.m10};
        padding: ${s.m7} ${s.m8};
        padding-left: 16px;
        display: inline-block;
        position: relative;
        box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);
        border-radius: 0 4px 4px 0;
        z-index: 2000;
        border-bottom: 2px solid rgba(0, 0, 0, 0.2);
        border-top: 2px solid rgba(0, 0, 0, 0.0);
      }
      .step span,
      .step-title span {
          font-weight: 600;
          color: ${c.darkFirst};
        }

      .step:first-child {
        z-index: 10000;
        margin-left: 0px;
        padding-left: ${s.m8};
      }

      .step:nth-child(2) {
        z-index: 9000;
      }

      .step:nth-child(3) {
        z-index: 8000;
      }

    `}</style>
    </div>
  )
}

const StepTwo = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="step-wrapper">
          <div className="step">
            <span>1</span>
          </div>
          <div className="step-title">
            <span>Account</span>
          </div>
        </div>
      </div>
      <div className="right-side">
        <span>Step 2/6</span>
      </div>
      <style jsx>{`
        .container {
          font-size: 0;
        }

        .left-side,
        .right-side {
          font-size: ${s.m10};
          display: inline-block;
        }
        .left-side {
          width: 70%;
        }

        .right-side {
          width: 30%;
          padding: ${s.m8} 0;
          padding-right: ${s.m9};
          text-align: right;
        }

        .right-side span {
          font-weight: 600;
        }

        .step-wrapper {
          font-size: 0;
        }

        .step,
        .step-title {
          margin-left: -4px;
          background-color: ${c.actionFirst};
          font-size: ${s.m10};
          padding: ${s.m7} ${s.m8};
          padding-left: 16px;
          display: inline-block;
          position: relative;
          box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);
          border-radius: 0 4px 4px 0;
          z-index: 2000;
          border-bottom: 2px solid rgba(0, 0, 0, 0.2);
          border-top: 2px solid rgba(0, 0, 0, 0.0);
        }
        .step span,
        .step-title span {
            font-weight: 600;
            color: ${c.darkFirst};
          }

        .step:first-child {
          z-index: 10000;
          margin-left: 0px;
          padding-left: ${s.m8};
        }

        .step:nth-child(2) {
          z-index: 9000;
        }

        .step:nth-child(3) {
          z-index: 8000;
        }
    `}</style>
    </div>
  )
}

const StepThree = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="step-wrapper">
          <div className="step">
            <span>1</span>
          </div>
          <div className="step">
            <span>2</span>
          </div>
          <div className="step-title">
            <span>Bitcoin Address</span>
          </div>
        </div>
      </div>
      <div className="right-side">
        <span>3/6</span>
      </div>
      <style jsx>{`
        .container {
          font-size: 0;
        }

        .left-side,
        .right-side {
          font-size: ${s.m10};
          display: inline-block;
        }
        .left-side {
          width: 70%;
        }

        .right-side {
          width: 30%;
          padding: ${s.m8} 0;
          padding-right: ${s.m9};
          text-align: right;
        }

        .right-side span {
          font-weight: 600;
        }

        .step-wrapper {
          font-size: 0;
        }

        .step,
        .step-title {
          margin-left: -4px;
          background-color: ${c.actionFirst};
          font-size: ${s.m10};
          padding: ${s.m7} ${s.m8};
          padding-left: 16px;
          display: inline-block;
          position: relative;
          box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);
          border-radius: 0 4px 4px 0;
          z-index: 2000;
          border-bottom: 2px solid rgba(0, 0, 0, 0.2);
          border-top: 2px solid rgba(0, 0, 0, 0.0);
        }
        .step span,
        .step-title span {
            font-weight: 600;
            color: ${c.darkFirst};
          }

        .step:first-child {
          z-index: 10000;
          margin-left: 0px;
          padding-left: ${s.m8};
        }

        .step:nth-child(2) {
          z-index: 9000;
        }

        .step:nth-child(3) {
          z-index: 8000;
        }
    `}</style>
    </div>
  )
}

const StepFour = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="step-wrapper">
          <div className="step">
            <span>1</span>
          </div>
          <div className="step">
            <span>2</span>
          </div>
          <div className="step">
            <span>3</span>
          </div>
          <div className="step-title">
            <span>Phone Nr</span>
          </div>
        </div>
      </div>
      <div className="right-side">
        <span>4/6</span>
      </div>
      <style jsx>{`
        .container {
          font-size: 0;
        }

        .left-side,
        .right-side {
          font-size: ${s.m10};
          display: inline-block;
        }
        .left-side {
          width: 70%;
        }

        .right-side {
          width: 30%;
          padding: ${s.m8} 0;
          padding-right: ${s.m9};
          text-align: right;
        }

        .right-side span {
          font-weight: 600;
        }

        .step-wrapper {
          font-size: 0;
        }

        .step,
        .step-title {
          margin-left: -4px;
          background-color: ${c.actionFirst};
          font-size: ${s.m10};
          padding: ${s.m7} ${s.m8};
          padding-left: 16px;
          display: inline-block;
          position: relative;
          box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);
          border-radius: 0 4px 4px 0;
          z-index: 2000;
          border-bottom: 2px solid rgba(0, 0, 0, 0.2);
          border-top: 2px solid rgba(0, 0, 0, 0.0);
        }
        .step span,
        .step-title span {
            font-weight: 600;
            color: ${c.darkFirst};
          }

        .step:first-child {
          z-index: 10000;
          margin-left: 0px;
          padding-left: ${s.m8};
        }

        .step:nth-child(2) {
          z-index: 9000;
        }

        .step:nth-child(3) {
          z-index: 8000;
        }
    `}</style>
    </div>
  )
}

const StepFive = () => {
  return (
    <div className="container">
      <div className="full-step">
        <div className="step-wrapper">
          <div className="step">
            <span>1</span>
          </div>
          <div className="step">
            <span>2</span>
          </div>
          <div className="step">
            <span>3</span>
          </div>
          <div className="step">
            <span>4</span>
          </div>
          <div className="step-title">
            <span>Confirmation</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          font-size: 0;
        }

        .left-side,
        .right-side {
          font-size: ${s.m10};
          display: inline-block;
        }
        .left-side {
          width: 70%;
        }

        .right-side {
          width: 30%;
          padding: ${s.m8} 0;
          padding-right: ${s.m9};
          text-align: right;
        }

        .right-side span {
          font-weight: 600;
        }

        .step-wrapper {
          font-size: 0;
        }

        .step,
        .step-title {
          margin-left: -4px;
          background-color: ${c.actionFirst};
          font-size: ${s.m10};
          padding: ${s.m7} ${s.m8};
          padding-left: 16px;
          display: inline-block;
          position: relative;
          box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);
          border-radius: 0 4px 4px 0;
          z-index: 2000;
          border-bottom: 2px solid rgba(0, 0, 0, 0.2);
          border-top: 2px solid rgba(0, 0, 0, 0.0);
        }
        .step span,
        .step-title span {
            font-weight: 600;
            color: ${c.darkFirst};
          }

        .step:first-child {
          z-index: 10000;
          margin-left: 0px;
          padding-left: ${s.m8};
        }

        .step:nth-child(2) {
          z-index: 9000;
        }

        .step:nth-child(3) {
          z-index: 8000;
        }

        .step:nth-child(4) {
          z-index: 7000;
        }
    `}</style>
    </div>
  )
}

const StepConfirmPayment = () => {
  return (
    <div className="container">
      <div className="full-step">
        <div className="step-wrapper">
          <div className="step-title">
            <span>Confirm Payment</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          font-size: 0;
        }

        .left-side,
        .right-side {
          font-size: ${s.m10};
          display: inline-block;
        }
        .left-side {
          width: 70%;
        }

        .right-side {
          width: 30%;
          padding: ${s.m8} 0;
          padding-right: ${s.m9};
          text-align: right;
        }

        .right-side span {
          font-weight: 600;
        }

        .step-wrapper {
          font-size: 0;
        }

        .step,
        .step-title {
          text-align: center;
          width: 100%;
          background-color: #D34836;
          font-size: ${s.m10};
          padding: ${s.m7} ${s.m8};
          padding-left: 16px;
          display: inline-block;
          position: relative;
          box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);
          z-index: 2000;
          border-bottom: 2px solid rgba(0, 0, 0, 0.2);
          border-top: 2px solid rgba(0, 0, 0, 0.0);
        }
        .step span,
        .step-title span {
            font-weight: 600;
            color: white;
          }

        .step:first-child {
          z-index: 10000;
          margin-left: 0px;
          padding-left: ${s.m8};
        }

        .step:nth-child(2) {
          z-index: 9000;
        }

        .step:nth-child(3) {
          z-index: 8000;
        }

        .step:nth-child(4) {
          z-index: 7000;
        }
    `}</style>
    </div>
  )
}

const StepPaymentInProcess = () => {
  return (
    <div className="container">
      <div className="full-step">
        <div className="step-wrapper">
          <div className="step-title">
            <span>Wait for Payment Confirmation</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          font-size: 0;
        }

        .left-side,
        .right-side {
          font-size: ${s.m10};
          display: inline-block;
        }
        .left-side {
          width: 70%;
        }

        .right-side {
          width: 30%;
          padding: ${s.m8} 0;
          padding-right: ${s.m9};
          text-align: right;
        }

        .right-side span {
          font-weight: 600;
        }

        .step-wrapper {
          font-size: 0;
        }

        .step,
        .step-title {
          text-align: center;
          width: 100%;
          background-color: #D34836;
          font-size: ${s.m10};
          padding: ${s.m7} ${s.m8};
          padding-left: 16px;
          display: inline-block;
          position: relative;
          box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);
          z-index: 2000;
          border-bottom: 2px solid rgba(0, 0, 0, 0.2);
          border-top: 2px solid rgba(0, 0, 0, 0.0);
        }
        .step span,
        .step-title span {
            font-weight: 600;
            color: white;
          }

        .step:first-child {
          z-index: 10000;
          margin-left: 0px;
          padding-left: ${s.m8};
        }

        .step:nth-child(2) {
          z-index: 9000;
        }

        .step:nth-child(3) {
          z-index: 8000;
        }

        .step:nth-child(4) {
          z-index: 7000;
        }
    `}</style>
    </div>
  )
}

const StepSuccess = () => {
  return (
    <div className="container">
      <div className="full-step">
        <div className="step-wrapper">
          <div className="step-title">
            <span>Success</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          font-size: 0;
        }

        .left-side,
        .right-side {
          font-size: ${s.m10};
          display: inline-block;
        }
        .left-side {
          width: 70%;
        }

        .right-side {
          width: 30%;
          padding: ${s.m8} 0;
          padding-right: ${s.m9};
          text-align: right;
        }

        .right-side span {
          font-weight: 600;
        }

        .step-wrapper {
          font-size: 0;
        }

        .step,
        .step-title {
          text-align: center;
          width: 100%;
          background-color: ${c.actionFirst};
          font-size: ${s.m10};
          padding: ${s.m7} ${s.m8};
          padding-left: 16px;
          display: inline-block;
          position: relative;
          box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);
          z-index: 2000;
          border-bottom: 2px solid rgba(0, 0, 0, 0.2);
          border-top: 2px solid rgba(0, 0, 0, 0.0);
        }
        .step span,
        .step-title span {
            font-weight: 600;
            color: ${c.darkFirst};
          }
    `}</style>
    </div>
  )
}

export default (props) => (
    <div id="progress-bar" className="root">
      { props.step === 1 ? <StepOne /> : null }
      { props.step === 2 ? <StepTwo /> : null }
      { props.step === 3 ? <StepThree /> : null }
      { props.step === 4 ? <StepFour /> : null }
      { props.step === 5 ? <StepFive /> : null }
      { props.step === 6 ? <StepConfirmPayment /> : null }
      { props.step === 7 ? <StepPaymentInProcess /> : null }
      { props.step === 8 ? <StepSuccess /> : null }
    <style jsx>{`
      .root {
        background: ${c.darkFirst};
        color: white;
      }

    `}</style>
  </div>
)

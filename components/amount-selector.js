import { c, s, l, m } from '../lib/theme'

class AmountSelector extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="root">
        <div className="container">
          <div className="type-selector">
            <div className="type-selector-left active">
              <span>Buy Bitcoin</span>
            </div>
            <div className="type-selector-right">
              <span>Sell Bitcoin</span>
            </div>
          </div>
          <div className="amount">
            <div className="amount-title">
              <span>I would like to buy bitcoin for:</span>
            </div>
            <div className="amount-input">
              <div className="amount-input-dollar">
                <span>Dollar Amount</span>
              </div>
              <div className="amount-input-field">
                <span>435</span>
              </div>
            </div>
          </div>
          <div className="bitcoin">
            <div className="bitcoin-input">
              <div className="bitcoin-input-bitcoin">
                <span>Receive Bitcoin</span>
              </div>
              <div className="bitcoin-input-field">
                <span>0.323215</span>
              </div>
            </div>
          </div>
          <div className="cta">
            <div className="cta-title">
              <span>Buy Bitcoin</span>
            </div>
          </div>
        </div>
        <style jsx>{`
          .root {
            color: ${c.baseBlack};
            font-size: ${s.m10};
            display: none;
          }

          @media all and (min-width: ${s.m28}) {
            .root {
              display: block;
            }
          }
          .container {
            border: 1px solid #dbdbdb;
            border-radius: 4px;
            width: ${s.m24};
          }

          .type-selector {
            font-size: 0;
            width: ${s.m23};
            margin: ${s.m12} auto;
            border-radius: 4px;
            border: 1px solid #dbdbdb;
            padding: ${s.m7};
          }

          .type-selector-left,
          .type-selector-right {
            display: inline-block;
            font-size: ${s.m10};
            width: 50%;
            padding: ${s.m10};
            font-weight: 500;
            color: #AAAAAA;
          }

          .type-selector-left.active,
          .type-selector-right.active {
            background-color: ${c.lightFirst};
            border-radius: 4px;
            border: 1px solid ${c.lightBorder};
            color: ${c.baseWhite};
          }

          .amount,
          .bitcoin {
            text-align: left;
            width: ${s.m23};
            margin: 0 auto;
          }

          .bitcoin {
            margin-top: ${s.m10};
          }

          .amount-title,
          .bitcoin-title {
            font-size: ${s.m11};
            font-weight: 500;
          }

          .amount-input,
          .bitcoin-input {
            border: 1px solid #dbdbdb;
            border-radius: 4px;
            overflow: hidden;
            margin-top: ${s.m8};
            font-weight: 500;
            color: ${c.baseBlack};
          }

          .amount-input {
            border: 1px solid ${c.lightBorder};

          }

          .amount-input-dollar,
          .bitcoin-input-bitcoin {
            float: left;
            padding: ${s.m10};
            background-color: #eeeeee;
            border-right: 1px solid #dbdbdb;
          }

          .amount-input-dollar {
            background-color: ${c.lightFirst};
            border-right: 1px solid ${c.lightBorder};
            color: ${c.baseWhite};
          }

          .amount-input-field,
          .bitcoin-input-field {
            padding: ${s.m10};
            overflow: hidden;
            font-weight: 400;
          }

          .cta {

          }
          .cta {
            width: ${s.m23};
            margin: ${s.m12} auto ${s.m13}
            border-radius: 4px;
            border: 1px solid #dbdbdb;
            padding: ${s.m7};
          }

          .cta-title {
            padding: ${s.m10};
            font-weight: 500;
            font-size: ${s.m11};
            background-color: ${c.actionFirst};
            border-radius: 4px;
            border: 1px solid ${c.actionBorder};
            color: ${c.baseBlack};
          }
        `}</style>
      </div>
    )
  }
}

export default AmountSelector

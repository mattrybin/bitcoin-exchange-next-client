import { c, s, l, m } from '../../lib/theme'
import { func, string } from 'prop-types'

class Submit extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    onClick: func.isRequired,
    value: string.isRequired
  }

  render() {
    return (
      <div className="submit-container">
          <input id="amount-submit" type="submit" onClick={this.props.onClick} value={this.props.value} />
      <style jsx>{`
        .submit-container {
          margin: ${s.m10} 0;
          background-color: ${c.lightFirst};
          text-align: center;
          border-radius: 2px;
          cursor: pointer;
        }

        input {
          background: none;
          border: none;
          padding: ${s.m10} 0;
          font-size: ${s.m10};
          color: white;
          font-weight: 600;
          width: 100%;
        }
        .submit-container:hover {
          background-color: ${c.lightBorder};

        }
        input:active {
          outline: none;
        }
      `}</style>
      </div>
    )
  }
}

export default Submit

import { c, s, l, m } from '../../lib/theme'
import { func,string } from 'prop-types'

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    onChange: func.isRequired,
    type: string.isRequired,
    name: string.isRequired,
    label: string.isRequired
  }

  render() {
    return (
      <div className="input-container">
        <label className="input-wrapper">
          <span>{this.props.label}:</span>
          <input type={this.props.type} name={this.props.name} onChange={this.props.onChange} />
        </label>
      <style jsx>{`
        .input-container {
          padding: ${s.m10} 0 0;
        }
        .input-wrapper span,
        .input-wrapper input {
          display: inline-block;
          width: 100%;
        }
        .input-wrapper span {
          font-weight: 600;
          margin-bottom: ${s.m6};
        }
        .input-wrapper input {
          border: 1px solid #D8D8D8;
          font-size: ${s.m9};
          padding: ${s.m9};
          border-radius: 2px;
        }
        .input-wrapper input:focus {
          outline: 0;
          border: 1px solid ${c.actionFirst};
        }
      `}</style>
      </div>
    )
  }
}

export default Input

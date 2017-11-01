import { c, s, l, m } from '../../lib/theme'

const Input = ({ error, ...props }) => {
  return (
    <div className='form-group'>
      <label className={`input-wrapper ${error ? 'error-form' : null}`}>
        <span>{props.label}</span>
        <input {...props} />
      </label>

      { error ? <small className='error'>{error}</small> : null }

      <style jsx>{`
        .form-group {
          padding: ${s.m10} 0 0;
        }
        .input-wrapper.error-form input {
          border: 1px solid red;
        }
        .error {
          display: inline-block;
          width: 100%;
          margin-top: ${s.m8};
          font-size: ${s.m9};
          color: red;
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
  );
};

export default Input

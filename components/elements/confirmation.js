import { c, s, l, m } from '../../lib/theme'

const ConfirmationBox = (props) => {
  return (
    <div className="confirmation-field">
      <div className="confirmation-field-title">
        <span>{props.title}</span>
      </div>
      <div className="confirmation-field-data">
        <span>{props.data}</span>
      </div>
      <style jsx>{`
        .confirmation-title {
          font-weight: 600;
          margin-bottom: ${s.m6};
        }
        .confirmation-field {
          border-bottom: 1px solid #D8D8D8;
          padding: ${s.m8};
        }
        .confirmation-field:last-child {
          border-bottom: 0;
        }
        .confirmation-field-title {
          font-size: ${s.m9};
          margin-bottom: ${s.m4};
        }
        .confirmation-field-data {
          font-weight: 600;
        }
        .confirmation-field-data-bitcoin {
          font-weight: 600;
          font-size: ${s.m9}
        }
      `}</style>
    </div>
  )
}
const Confirmation = (props) => {
  return (
  <div className="confirmation">
      <div className="confirmation-box">
        {props.items.map((item) => <ConfirmationBox title={item.title} data={item.data} />)}
      </div>
      <style jsx>{`
        .confirmation {
          margin-top: ${s.m10};
        }

        .confirmation-box {
          background-color: white;
          border: 1px solid #D8D8D8;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};

export default Confirmation

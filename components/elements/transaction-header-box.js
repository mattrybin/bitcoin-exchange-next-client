import { c, s, l, m } from '../../lib/theme'
import Link from 'next/link'

export default (props) => (
  <div className="root">
    <div className="container">
      <div className="title">
        <span>{props.title}</span>
      </div>
      <div className="sub-title">
        <span>{props.subTitle}</span>
      </div>
    </div>
    <style jsx>{`
      .root {
        background-color: white;
        border-bottom: 1px solid #DFE8EF;
        padding: ${s.m10} ${s.m10};
      }
      .title {
        font-size: ${s.m10};
        font-weight: 600;
      }
      .sub-title {
        font-size: ${s.m9};

      }
    `}</style>

  </div>
)

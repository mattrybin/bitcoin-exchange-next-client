import { c, s, l, m } from '../../lib/theme'
import Link from 'next/link'
import { object,func } from 'prop-types'
import Form from 'react-validify'
import { graphql, withApollo, compose } from 'react-apollo'
import cookie from 'cookie'
import gql from 'graphql-tag'
import util from 'util'

import checkLoggedIn from '../../lib/check-logged-in'
import withData from '../../lib/with-data'
import redirect from '../../lib/redirect'

import Input from './input'
import Submit from './submit'

import TransactionHeaderBox from './transaction-header-box'

class TransactionLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
    this.fieldChange = this.fieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formStateChanger = this.formStateChanger.bind(this);
  }

  static propTypes = {
    onChange: func.isRequired,
    onSubmit: func.isRequired,
    data: object.isRequired
  }

  fieldChange(event) {
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
  }

  formStateChanger(state) {
    this.setState({
      error: state
    })
  }

  handleSubmit(event) {
    this.props.signin(event, this.formStateChanger, this.props.onSubmit)
  }

  render() {
    let data = this.props.data;
    return (
      <div className="root">
        <header>
          <TransactionHeaderBox title="Log In" subTitle="Log In to your account" />
        </header>
        <div className="container">
          {this.state.error === true ? <div className="error"><span>No user found with this information</span></div> : null}
          {this.state.error === 'offline'? <div className="error"><span>Check your internet connection</span></div> : null}
          <Form
            rules={{
              email: 'email|required',
              password: 'required'
            }}>
            <Input label="Your Email" placeholder="Email" type="email" name="email" onChange={this.fieldChange} />
            <Input label="Your Password" placeholder="Password" type="password" name="password" onChange={this.fieldChange} />
            {this.state.error === 'loading' ? <img className="loading" src="/static/three-dots.svg" alt="loading" /> : <Submit submit value="Login" onClick={this.handleSubmit} /> }
          </Form>
        </div>
      <style jsx>{`
        .container {
          padding: 0 ${s.m10};
        }
        .error {
          margin: ${s.m11} auto 0;
          text-align: center;
          font-weight: 600;
          font-size: ${s.m10};
          background: #ff5a46;
          border: 1px solid #e31900;
          border-radius: 2px;
          padding: ${s.m9};
          max-width: ${s.m23};
          color: white;
        }
        .loading {
          margin: ${s.m13} auto 0;
          display: block;
          width: ${s.m16};
        }
      `}</style>
      </div>
    )
  }
}

export default compose(
  // withData gives us server-side graphql queries before rendering
  withData,
  // withApollo exposes `this.props.client` used when logging out
  withApollo,
  graphql(
    // The `signinUser` mutation is provided by graph.cool by default
    gql`
      mutation Signin($email: String!, $password: String!) {
        signinUser(email: { email: $email, password: $password }) {
          token
        }
      }
    `,
    {
      // Use an unambiguous name for use in the `props` section below
      name: 'signinWithEmail',
      // Apollo's way of injecting new props which are passed to the component
      props: ({
        signinWithEmail,
        // `client` is provided by the `withApollo` HOC
        ownProps: { client }
      }) => ({
        // `signin` is the name of the prop passed to the component
        signin: (form, stateFunc, onSubmit) => {
          stateFunc('loading')
          signinWithEmail({
            variables: {
              email: form.email,
              password: form.password
            }
          }).then(({ data: { signinUser: { token } } }) => {
            // Store the token in cookie
            document.cookie = cookie.serialize('token', token, {
              maxAge: 30 * 24 * 60 * 60 // 30 days
            })

            // Force a reload of all the current queries now that the user is
            // logged in
            client.resetStore().then(() => {
              // Now redirect to the homepage
              stateFunc(false)
              onSubmit()
            })
          }).catch((error) => {
            if(/Failed to fetch/.test(error)) {
              stateFunc('offline');
            } else {
              stateFunc(true);
            }
          })
        }
      })
    }
  )
)(TransactionLogin)

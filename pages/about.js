import App from '../components/App'
import Header from '../components/Header'

export default (props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <p>This is the about page</p>
  </App>
)

import App from '../components/App'
import Form from 'react-validify'

const pageData = {
  footer: false,
  header: false,
  title: 'Buy Bitcoin'
}

const Input = ({ error, ...props }) => {
  return (
    <div>
      <p>{error}</p>
      <input {...props} />
    </div>
  );
};
export default (props) => (
  <App pageData={pageData}>
    <Form rules={{email: 'email|required', password: 'required|min:8'}} >
      <Input name="email" />
      <Input name="password" type="password" />

    <div submit onClick={values => console.log('this will be called if validation passes', values)}>
      Submit!
    </div>
  </Form>
  </App>
)

import React from 'react';
import Input from '../Input/Input';
import { login } from '../validation';
import userData from '../userData.json';
import '../base.css';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const errors = login(email, password);
    console.log(Object.keys(errors).length === 0);
    if (Object.keys(errors).length === 0) {
      // make api call to authenticate user
      const user = userData.users.find(u => u.email === email && u.password === password);

      if (!user) {
        this.setState({
          errors: 'Invalid username or password'
        });
        return 
      }

      console.log('Logged in as:', user.firstName, user.lastName);
      
      console.log('test', this.props.onLoginSuccess());
      this.props.onLoginSuccess(); // Call the parent function

      this.setState({
        email: '',
        password: '',
      })
    } else {
      this.setState({ errors });
    }
  }

  render() {
    const { email, password, errors } = this.state;

    const inputData = [
      {label: 'Email', type: 'email', name: 'email', value: email, error: errors.email, onChange: this.handleInputChange},
      {label: 'Password', type: 'password', name: 'password', value: password, error: errors.password, onChange: this.handleInputChange},
    ]


    return (
      <form className='login' onSubmit={this.handleSubmit}>
        {Object.keys(errors).length !== 0 
          ? <span className='errorMsg'>We're sorry, but one or more fields are incomplete or incorrect.</span>
          : null 
        }
        {inputData.map((item) => (
          <Input
            key={item.label}
            label={item.label}
            type={item.type}
            name={item.name}
            value={item.value}
            error={item.error}
            onChange={item.onChange}
          />
        ))}
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;

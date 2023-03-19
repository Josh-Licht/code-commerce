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
    if (Object.keys(errors).length === 0) {
      // make api call to authenticate user
      const user = userData.users.find(u => u.email === email && u.password === password);

      if (!user) {
        this.setState({
          errors: 'Invalid username or password'
        });
        return 
      }

      // Successful login
      console.log('Logged in as:', user.firstName, user.lastName);
      
      this.setState({
        email: '',
        password: '',
      })
      // TODO: Redirect to dashboard
      //this.props.history.push('/cart');

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
        {Object.keys(errors).length > 0 
          ? <span className='errorMsg'>{errors}</span>
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

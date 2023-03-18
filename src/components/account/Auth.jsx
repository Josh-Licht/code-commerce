import React from 'react';
import Login from './Login';
import Signup from './Signup';
import './Account.css'

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }

  handleOptionChange = (event) => {
    const value = event.target.value;
    const login = value === 'create';
    this.setState({ login });
  }

  render() {
    const { login } = this.state;

    const options = [
      {label: 'Sign In', value: 'sign-in', checked: !login},
      {label: 'Create Account', value: 'create', checked: login},
    ]

    return (
      <div className='authContainer'>
        <div className='authToggle'>
          {options.map((item) => (
            <>
              <input
                type="radio" 
                id={item.value}
                value={item.value}
                checked={item.checked} 
                onChange={this.handleOptionChange}
              />
              <label htmlFor={item.value}>{item.label}</label>
            </>
          ))}
        </div>
        {login ? <Signup /> : <Login />}
      </div>
    );
  }
}

export default Auth;

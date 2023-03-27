import React from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { IoMdClose } from 'react-icons/io';
import '../base.css';
import './Toggle.css'

class Toggle extends React.Component {
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
    const { onLoginSuccess } = this.props;

    const options = [
      {label: 'Sign In', value: 'sign-in', checked: !login},
      {label: 'Create Account', value: 'create', checked: login},
    ]

    return (
      <div className='toggle-container'>
        <IoMdClose className="close" /> 
        <div className='toggle'>
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
        {login ? <Signup /> : <Login onLoginSuccess={onLoginSuccess} />}
      </div>
    );
  }
}

export default Toggle;

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
    const login = value === 'sign-in';
    this.setState({ login });
  }

  render() {
    const { login } = this.state;

    const options = [
      {label: 'Sign In', value: 'sign-in', checked: login},
      {label: 'Create Account', value: 'create', checked: !login},
    ]

    return (
      <div className='container'>
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
        {login ? <Login /> : <Signup />}
      </div>
    );
  }
}

export default Toggle;

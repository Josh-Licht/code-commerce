import React, { Component } from 'react';
import Input from '../Input/Input';
import { FaEye, FaEyeSlash, FaFacebookF } from 'react-icons/fa';
import { signup, input } from '../validation';
import userData from "../userData.json";
import '../base.css';
import './Signup.css'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      postalCode: '',
      errors: {},
      showPassword: false
    };
  }

  handleTogglePassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    }, () => {
      const errors = input(this.state)

      errors[name] === undefined ? this.setState({ errors: {} }) 
      : this.setState({
        errors: {
          ...this.state.errors,
          [name]: errors[name]
        }
      })
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, postalCode } = this.state;
    const errors = signup(this.state);

    if (Object.keys(errors).length === 0) {
      // Create new user object
      const newUser = {
        firstName,
        lastName,
        email,
        password,
        postalCode
      };

      // Add new user to userData.json
      userData.users.push(newUser)
      console.log(userData.users);

      // Clear form inputs and show success message
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        postalCode: "",
        errors: {},
        msg: "Account created successfully!",
      });
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { firstName, lastName, email, password, confirmPassword, postalCode, errors, msg, showPassword  } = this.state;

    const inputData = [
      {
        label: 'Your E-Mail Address *', name: 'email', type: "email", 
        value: email, onChange: this.handleChange, error: errors.email},
      {
        label: 'Create Password *', name: 'password', type: showPassword ? 'text' : 'password', 
        value: password, onChange: this.handleChange, error: errors.password, 
        icon: 
          showPassword 
          ? <FaEyeSlash className="eye" onClick={this.handleTogglePassword} /> 
          : <FaEye className="eye" onClick={this.handleTogglePassword} />, 
        msg: 'Password must be 8-20 characters, including at least one capital letter, at least one small letter, one number and one special character - ! @ # $ % ^ & * ( ) _ +'
      },
      {
        label: 'Confirm Password *', name: 'confirmPassword', type: 'password', 
        value: confirmPassword, onChange: this.handleChange, error: errors.confirmPassword
      },
      {
        label: 'First Name *', name: 'firstName', value: firstName, onChange: this.handleChange, 
        error: errors.firstName, patter: "[A-Za-z]+", title: 'First name cannot contain numbers'
      },
      {
        label: 'Surname *', name: 'lastName', value: lastName, onChange: this.handleChange, 
        error: errors.lastName, patter: "[A-Za-z]+", title: 'Last name cannot contain numbers'
      },
      {
        label: 'Postcode', name: 'postalCode', value: postalCode, onChange: this.handleChange, 
        error: errors.postalCode, patter: "[0-9]{5}", title: 'Postal code must be a 5-digit number'
      },
    ]

    return (
      <form className='signUp' onSubmit={this.handleSubmit}>
        {Object.keys(errors).length !== 0 
          ? <span className='errorMsg'>We're sorry, but one or more fields are incomplete or incorrect. <u>Find error(s)</u>.</span>
          : null 
        }
        {msg ? <span className='msg'>{msg}</span>: null }
        {
          inputData.map((item) => (
            <Input
              key={item.name}
              label={item.label}
              name={item.name}
              value={item.value}
              type={item.type}
              onChange={item.onChange}
              error={item.error}
              pattern={item.patter}
              title={item.title}
              icon={item.icon}
              msg={item.msg}
              required
            />
          ))
        }
        <button type="submit" className='save'>Save</button>
        <div className='divider'>or</div>
        <button className='facebook'>
          <FaFacebookF className="icon"/>
          sign up with facebook
        </button>
        <span className='cancel'><u>Cancel</u></span>
        <div className='terms'>
          {['Privacy Policy and Cookies','Terms of Sale and Use'].map(
            item => <span><u>{item}</u></span>
          )}
        </div>
      </form>
    );
  }
}

export default Signup;

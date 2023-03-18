import React, { Component } from 'react';
import Input from '../Input';
import { signup } from '../validation';
import './Account.css'

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
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword, postalCode } = this.state;
    const errors = signup(firstName, lastName, email, password, confirmPassword, postalCode);
    console.log(signup(password));
    if (Object.keys(errors).length === 0) {
      // Handle successful signup here
      console.log('Signup successful');
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { firstName, lastName, email, password, confirmPassword, postalCode, errors } = this.state;

    const inputData = [
      {label: 'Your E-Mail Address *', name: 'email', type: "email", value: email, onChange: this.handleChange, error: errors.email},
      {label: 'Create Password *', name: 'password', type: "password", value: password, onChange: this.handleChange, error: errors.password},
      {label: 'Confirm Password *', name: 'confirmPassword', type: 'password', value: confirmPassword, onChange: this.handleChange, error: errors.confirmPassword},
      {label: 'First Name *', name: 'firstName', value: firstName, onChange: this.handleChange, error: errors.firstName, patter: "[A-Za-z]+", title: 'First name cannot contain numbers'},
      {label: 'Surname *', name: 'lastName', value: lastName, onChange: this.handleChange, error: errors.lastName, patter: "[A-Za-z]+", title: 'Last name cannot contain numbers'},
      {label: 'Postcode', name: 'postalCode', value: postalCode, onChange: this.handleChange, error: errors.postalCode, patter: "[0-9]{5}", title: 'Postal code must be a 5-digit number'},
    ]

    return (
      <form className='signUp' onSubmit={this.handleSubmit}>
        {
          inputData.map((item) => (
            <Input
              key={item.label}
              label={item.label}
              name={item.name}
              value={item.value}
              type={item.type}
              onChange={item.onChange}
              error={item.error}
              pattern={item.patter}
              title={item.title}
              required
            />
          ))
        }
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default Signup;

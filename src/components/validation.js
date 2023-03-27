const validate = (data) => {
  const {firstName, lastName, email, password, confirmPassword, postalCode} = data
  const errors = {};

  if (!firstName) {
    errors.firstName = 'Please enter a valid first name';
  } else if (!/^[A-Za-z]+$/.test(firstName)) {
    errors.firstName = 'First name cannot contain numbers';
  }

  if (!lastName) {
    errors.lastName = 'Please enter a valid last name';
  } else if (!/^[A-Za-z]+$/.test(lastName)) {
    errors.lastName = 'Last name cannot contain numbers';
  }

  if (!email) {
    errors.email = 'Please enter a valid email';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Invalid email address';
  }

  if (!password) {
    errors.password = 'Password is required';
  } else if (!/[A-Z]/.test(password)) {
    errors.password = 'Must contain one uppercase letter';
  } else if (!/[a-z]/.test(password)) {
    errors.password = 'Must contain one lowercase letter';
  } else if (!/[!@#$%^&*()_+]/.test(password)) {
    errors.password = 'Must contain one special character';
  } else if (!/[0-9a-zA-Z!@#$%^&*()_+]{8,20}/.test(password)) {
    errors.password = 'Must be between 8-20 characters long';
  } 

  if (!confirmPassword) {
    errors.confirmPassword = 'Confirm password is required';
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  if (!postalCode) {
    errors.postalCode = 'Postal code is required';
  } else if (!/^\d+$/.test(postalCode)) {
    errors.postalCode = 'Postal code must only contain numbers';
  }

  return errors
}

export const signup = (data) => validate(data)

export const input = (data) => validate(data)

export const login = (email, password) => {
  const errors = {};

  if (!email) {
    errors.email = 'Please enter your email';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Invalid email address';
  }

  if (!password) {
    errors.password = 'Password is required';
  }

  return errors;
}


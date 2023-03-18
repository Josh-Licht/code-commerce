export const signup = (firstName, lastName, email, password, confirmPassword, postalCode) => {
  const errors = {};

  if (!firstName) {
    errors.firstName = 'Please enter your first name';
  } else if (!/^[A-Za-z]+$/.test(firstName)) {
    errors.firstName = 'First name cannot contain numbers';
  }

  if (!lastName) {
    errors.lastName = 'Please enter your last name';
  } else if (!/^[A-Za-z]+$/.test(lastName)) {
    errors.lastName = 'Last name cannot contain numbers';
  }

  if (!email) {
    errors.email = 'Please enter your email';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Invalid email address';
  }

  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  console.log(confirmPassword === password);

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

  return errors;
}

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


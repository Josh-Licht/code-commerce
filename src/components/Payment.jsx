import React from 'react';
import ProgressBar from './ProgressBar';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    };
  }

  render() {
    return (
      // Payment component JSX goes here
      <div>
        <ProgressBar progress={3} />
      </div>
    );
  }
}

export default Payment;

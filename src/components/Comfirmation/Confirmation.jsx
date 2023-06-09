import React from 'react';
import ProgressBar from '../ProgressBar';
import '../base.css';
import './Confirmation.css'

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: '',
      orderTotal: ''
    };
  }

  render() {
    return (
      // Confirmation component JSX goes here
      <div>
        <ProgressBar progress={4} />
      </div>
    );
  }
}

export default Confirmation;

import React from 'react';
import ProgressBar from './ProgressBar';

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: ''
    };
  }

  render() {
    return (
      // Shipping component JSX goes here
      <div>
        <ProgressBar progress={2} />
      </div>
    );
  }
}

export default Shipping;

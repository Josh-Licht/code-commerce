import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar'
import '../base.css';
import './Cart.css'

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      // Cart component JSX goes here
      <div className="cart-container">
        <div className="cart shadow-bg">
          <div className="cart-left">
            <ProgressBar />
            <div className="cart-items shadow-sm">
      
            </div>
          </div>
          <div className="cart-summary shadow-sm">

          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar'
import CartItems from './CartItems';
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

    const products = [
      {
        category: 'women', name: 'Floral Print Wrap Dress', 
        color: 'Navy Blue', size: 42, price: 21.90, qty: 1, inStock: true,
        img: 'https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png'
      },
      {
        category: 'women', name: 'Dotted Print Wrap Dress', 
        color: 'Black', size: 40, price: 32.50, qty: 1, inStock: true,
        img: 'https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png'
      },
    ]
    return (
      // Cart component JSX goes here
      <div className="cart-container">
        <div className="cart shadow-bg">
          <div className="cart-left">
            <ProgressBar />
            <div className='cart-items shadow-sm'>
              <div className="cart-nav grid">
                {['Product','Price','Quantity','Total Price'].map(item => 
                  <div class={"nav-item " + (item === "Product" ? 'alt' : '')}>{item}</div>)}
              </div>
              {
                products.map((item) => (
                  <CartItems 
                    key={item.name}
                    category={item.category}
                    name={item.name}
                    color={item.color}
                    size={item.size}
                    price={item.price}
                    qty={item.qty}
                    stock={item.stock}
                    img={item.img}
                  />
                ))
              }
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
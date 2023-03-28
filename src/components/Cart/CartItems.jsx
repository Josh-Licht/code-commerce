import React from 'react';
import '../base.css';
import './Cart.css'

const CartItems = ({category,name,color,size,price,qty,stock,img}) => {

  return (
    <div class="cart-item grid">
      <div class="product-info">
        <i class="fas fa-times-circle"></i>
        <img src={img} alt="" />
        <div class="product-content">
          <span>{category}</span>
          <h3>{name}</h3>
          <div class="sub-content">
            <div>Color:<span>{color}</span></div>
            <div>Size:<span>{size}</span></div>
          </div>
        </div>
      </div>
      <div class="item-price flex-row">${price.toFixed(2)}</div>
      <div class="item-qty flex-row">
        <select name="qty" id="qty">
          {['1','2','3','4'].map(item => <option value={item}>{item}</option>)}
        </select>          
      </div>
      <div class="item-total flex-row">${price.toFixed(2)}</div>
    </div>
  )
}



export default CartItems;
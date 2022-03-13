import React from 'react';
import { useLinkClickHandler } from 'react-router-dom';
import './CartButton.css';

function CartButton() {
  const clickHandler = useLinkClickHandler("/cart");

  return (
    <button className='cart-button' onClick={clickHandler}>
      <img src="/bag.png" />
    </button>
  )
}

export default CartButton;
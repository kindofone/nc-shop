import React from 'react';
import { useCartContext } from '../contexts/CartContext';

function Cart() {
  const {state, removeItem} = useCartContext();
  
  return (
    <div className='cart'>
      {state.items.map(id => 
        <button key={id} onClick={() => removeItem(id)}>Remove {id}</button>)}
    </div>
  )
}

export default Cart;
import React from 'react';
import { useCartContext } from '../contexts/CartContext';
import './Product.css';

function Product({
  id,
  title,
  price,
  category,
  description,
  image,
}) {
  const {addItem} = useCartContext();

  return (
    <div className='product'>
      <div className='imageContainer'>
        <img className='image' src={image} />
      </div>
      <label className='category'>{category}</label>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => addItem(id)}>${price}</button>
    </div>
  );
}

export default Product;

import React from 'react';
import './Product.css';

function Product({
  id,
  title,
  price,
  category,
  description,
  image,
}) {
  return (
    <div className='product'>
      <div className='imageContainer'>
        <img className='image' src={image} />
      </div>
      <label className='category'>{category}</label>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>${price}</button>
    </div>
  );
}

export default Product;

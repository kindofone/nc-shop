import React, {useContext} from 'react'
import './Products.css';
import Product from './Product';
import {useCartContext} from './../contexts/CartContext';

function Products({
  products, 
  category,
  search,
}) {
  return (
    <div className='products'>
      {products
        .filter(product => {
          const isInCategory = category === 'all' || product.category === category;
          const isInSearch = product.title.toLowerCase().includes(search.toLowerCase());
          return isInCategory && isInSearch;
        })
        .map(product => {
        return (
          <Product key={product.id} {...product} />
        );
      })}
    </div>
  )
}

export default Products
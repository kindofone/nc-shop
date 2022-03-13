import React, {useContext} from 'react'
import './Products.css';
import Product from './Product';
import {useCartContext} from './../contexts/CartContext';
import { useParams } from 'react-router-dom';
import { getCategorySlug } from './CategoryChooser';

function Products({
  products, 
  search,
}) {
  const {category} = useParams();

  return (
    <div className='products'>
      {products
        .filter(product => {
          const isInCategory = category == undefined || getCategorySlug(product.category) === category;
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
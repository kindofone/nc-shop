import React, {createContext, useEffect, useState} from 'react';
import Products from './Products';
import Search from './Search';
import CategoryChooser from './CategoryChooser';
import './App.css';
import {CartProvider} from '../contexts/CartContext';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001?resource=products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <CartProvider>
      <div className="app">
        <div className='header'>
          <CategoryChooser currentCategory={selectedCategory} onChange={setSelectedCategory} />
          <Search currentSearch={search} onSearch={setSearch} />
        </div>
        <Products 
          products={products} 
          category={selectedCategory}
          search={search}
        />
      </div>
    </CartProvider>
  );
}

export default App;

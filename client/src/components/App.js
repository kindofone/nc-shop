import {useEffect, useState} from 'react';
import Products from './Products';
import Search from './Search';
import CategoryChooser from './CategoryChooser';
import './App.css';

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
    <div className="app">
      <CategoryChooser onChange={setSelectedCategory} />
      <Search onSearch={setSearch} />
      <Products 
        products={products} 
        category={selectedCategory}
        search={search}
      />
    </div>
  );
}

export default App;

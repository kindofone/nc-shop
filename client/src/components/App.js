import {useEffect, useState} from 'react';
import Product from './Product';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="app">
      {products.map(product => {
        return (
          <Product {...product} />
        );
      })}
    </div>
  );
}

export default App;

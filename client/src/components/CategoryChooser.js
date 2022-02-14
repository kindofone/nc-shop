import React, { useEffect, useState } from 'react';
import './CategoryChooser.css';

function CategoryChooser({currentCategory = 'all', onChange}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001?resource=categories')
      .then(response => response.json())
      .then(data => setCategories(['all', ...data]));
  }, []);

  return (
    <div className='category-chooser'>
      {categories.map(category => {
        const categoryName = category.substr(0, 1).toUpperCase() + category.substr(1);
        return (
          <button 
            key={category} 
            className={`category-button ${category === currentCategory.toLowerCase() ? 'selected-category' : ''}`}
            onClick={() => onChange(category)}>
              {categoryName}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryChooser;

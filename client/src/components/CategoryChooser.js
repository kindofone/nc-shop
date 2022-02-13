import React, { useEffect, useState } from 'react';

function CategoryChooser({onChange}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001?resource=categories')
      .then(response => response.json())
      .then(data => setCategories(['all', ...data]));
  }, []);

  return (
    <div>
      {categories.map(category => {
        const categoryName = category.substr(0, 1).toUpperCase() + category.substr(1);
        return (
          <button 
            key={category} 
            onClick={() => onChange(category)}>
              {categoryName}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryChooser;

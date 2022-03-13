import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './CategoryChooser.css';

function CategoryChooser() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const {categoryFromURL} = useParams();
  const route = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const category = categories.find(category => getCategorySlug(category) === categoryFromURL);
    setSelectedCategory(categoryFromURL);
  }, [categoryFromURL]);

  useEffect(() => {
    fetch('http://localhost:3001?resource=categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  const goHome = () => {
    setSelectedCategory(null);
    navigate('/');
  };

  const onCategoryChange = category => {
    const categorySlug = getCategorySlug(category);
    setSelectedCategory(categorySlug);
    navigate(`/categories/${categorySlug}`);
  };

  return (
    <div className='category-chooser'>
      <button 
        className={`category-button ${route.pathname === '/' ? 'selected-category' : ''}`}
        onClick={goHome}>
          Home
      </button>
      {categories.map(category => {
        const categoryName = category.substr(0, 1).toUpperCase() + category.substr(1);
        return (
          <button 
            key={category} 
            className={`category-button ${getCategorySlug(category) === selectedCategory ? 'selected-category' : ''}`}
            onClick={() => onCategoryChange(category)}>
              {categoryName}
          </button>
        );
      })}
    </div>
  );
}

export function getCategorySlug(category) {
  return category.replaceAll("'", "").replaceAll(' ', '-');
}

export default CategoryChooser;

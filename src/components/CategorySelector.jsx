import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/categorySelector.css'
const CategorySelector = ({ onChange }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines/sources?apiKey=c4f617a0cbf04794b25ff185c3cb523c');
        const categories = response.data.sources
          .filter(source => source.category)
          .map(source => source.category.toLowerCase())
          .filter((value, index, self) => self.indexOf(value) === index);
        setCategories(categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = event => {
    const category = event.target.value;
    setSelectedCategory(category);
    onChange(category);
  };

  return (
    <div>
      <label htmlFor="category">Select category:</label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        {categories.map(category => (
          <option key={category} value={category}>
            {category.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;

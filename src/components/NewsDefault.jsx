//const [categories, setCategories] = useState([]);
// const [selectedCategory, setSelectedCategory] = useState('general');

// useEffect(() => {
//   const getArticles = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=c4f617a0cbf04794b25ff185c3cb523c`
//       );
//       setArticles(response.data.articles);
//       setTotalPages(Math.ceil(response.data.articles.length / 20));
//     } catch (error) {
//       console.error(error);
//     }
//     setLoading(false);
//   };

//   getArticles();
// }, []);
// useEffect(() => {
//   const fetchArticles = async () => {
//     try {
//       const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=c4f617a0cbf04794b25ff185c3cb523c`);
//       setArticles(response.data.articles);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   }; 
//   fetchArticles();
// }, [country]);

// const handleCategoryChange = async category => {
//   try {
//     const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c4f617a0cbf04794b25ff185c3cb523c`);
//     setArticles(response.data.articles);
//   } catch (error) {
//     console.error(error);
//   }
// };

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import '../style/newsDefault.css';
import Loading from './Loading.jsx';
import NewsPagination from './NewsPagination';
import SelectorCountry from './CountrySelector.jsx'
import CategorySelector from './CategorySelector';

const NewsDefault = ({ title, description, url, urlToImage, content, author, publishedAt}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState('us');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [category, setCategories] = useState('');

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        let url = `https://newsapi.org/v2/top-headlines?pageSize=100&apiKey=c4f617a0cbf04794b25ff185c3cb523c`;
        if (country) {
          url += `&country=${country}`;
        }
        if (category) {
          url += `&category=${category}`;
        }
        const response = await axios.get(url);
        setArticles(response.data.articles);
        setTotalPages(Math.ceil(response.data.articles.length / 20));
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
  
    getArticles();
  }, [country, category]);
  

  const changeCurrentPage = numPage => {
    setCurrentPage(numPage);
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * 20;
    const endIndex = startIndex + 20;
    return articles.slice(startIndex, endIndex);
  };
  
  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    setLoading(true);
  };
  const handleCategoryChange = async category => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c4f617a0cbf04794b25ff185c3cb523c`);
        setArticles(response.data.articles);
    };
  
  

  return (
    <>
      <SelectorCountry onChange={handleCountryChange} />
      <CategorySelector onChange={handleCategoryChange} />
      <div className="main">
        {loading ? (
          <Loading />
        ) : (
          <>
            {getPaginatedData().map((article, index) => (
              <div key={`article-${index}`}>
                <NewsItem
                  title={article.title || title}
                  description={article.description || description}
                  url={article.url || url}
                  urlToImage={article.urlToImage || "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"}
                  content={article.content  || content}
                  publishedAt={article.publishedAt || publishedAt}
                  author={article.author || author}
                />
              </div>
            ))}
          </>
        )}
      
      </div>
      <div>
      <NewsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              changeCurrentPage={changeCurrentPage}
            />
      </div>
    </>
  );
};

export default NewsDefault;
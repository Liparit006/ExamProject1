import React, { useState } from 'react';
import axios from 'axios';
import '../style/search.css';
import { Link, NavLink } from 'react-router-dom';
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';
import Loading from './Loading';
function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (event) => {
    
    event.preventDefault();
    setIsLoading(true);
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=fae6904d00e747a8a11f6c6e9b28d7df`)
    setSearchResults(response.data.articles);
    setTotalPages(Math.ceil(response.data.articles.length / 20));
    setIsLoading(false);
  }

  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  }

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * 20;
    const endIndex = startIndex + 20;
    return searchResults.slice(startIndex, endIndex);
  }

  return (
    <div className="search-page">
      <h1>Search for News</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <label htmlFor="search-term">Search:</label>
        <input type="text" id="search-term" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <Loading/>
      ) : (
        searchResults.length > 0 ? (
          <>
            <div className="search-results">
              {getPaginatedData().map((article) => (
                <div className="news-article" key={article.url}>
                  <img src={article.urlToImage || "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"} alt={article.title} />
                  <div>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination-container">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                changeCurrentPage={changeCurrentPage}
                theme="bottom-border"
              />
            </div>
          </>
        ) : null
      )}
    </div>
  );
}

export default SearchPage;

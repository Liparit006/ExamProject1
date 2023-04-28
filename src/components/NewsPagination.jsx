import React from 'react';
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';

const NewsPagination = ({ currentPage, totalPages, changeCurrentPage }) => {
  return (
    <div className="pagination-container">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changeCurrentPage={changeCurrentPage}
        theme="bottom-border"
      />
    </div>
  );
};


export default NewsPagination;
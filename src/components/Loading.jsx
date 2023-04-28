import React from 'react';
import '../style/loading.css'
const Loading = () => {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner__circle"></div>
      <div className="loading-spinner__circle"></div>
      <div className="loading-spinner__circle"></div>
    </div>
  );
};

export default Loading;

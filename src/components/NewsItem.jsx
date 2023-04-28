// import React, { useState } from 'react';
// import Modal from './Modal';
// import '../style/newsItem.css';

// function NewsItem({ title, description, url, urlToImage, content, author, publishedAt, fullArticleUrl }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleModalOpen = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="news-box">
//       <div className="news-item">
//         <img src={urlToImage} alt={urlToImage} />
//         <h3>
//           <a href={url}>{title}</a>
//         </h3>
//         <p>{description}</p>
//         <div className="news-info">
//           <p>By {author} | {new Date(publishedAt).toLocaleDateString()}</p>
//           <button className='readMore' onClick={handleModalOpen}>Read More</button>
//         </div>
//         {isModalOpen && (
//           <Modal
//             title={title}
//             content={
//               <div>
//                 <img src={urlToImage} alt={urlToImage} />
//                 <p>{content}</p>
//                 <p>{description}</p>
//                 <p>By {author} | {new Date(publishedAt).toLocaleDateString()}</p>
//                 <a href={fullArticleUrl}>Read full article</a>
//               </div>
//             }
//             onClose={handleModalClose}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default NewsItem;


import React, { useState } from 'react';
import Modal from './Modal';
import '../style/newsItem.css';

function NewsItem({ title, description, url, urlToImage, content, author, publishedAt }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="news-box">
      <div className="news-item">
        <img src={urlToImage} alt={title} />
        <div className="news-text">
          <h3>
            <a href={url}>{title}</a>
          </h3>
          <p className="news-description">{description}</p>
          <div className="news-info">
            <span>{author}</span>
            <span>{new Date(publishedAt).toLocaleDateString()}</span>
          </div>
          <button className='read-more-button' onClick={handleModalOpen}>Read More</button>
          {isModalOpen && (
            <Modal
              title={title}
              content={
                <div>
                  <img src={urlToImage} alt={title} />
                  <p>{content}</p>
                  <p>{description}</p>
                  <div className="modal-info">
                    <span>{author}</span>
                    <span>{new Date(publishedAt).toLocaleDateString()}</span>
                    <a href={url} target="_blank" rel="noopener noreferrer">Read full article</a>
                  </div>
                </div>
              }
              onClose={handleModalClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsItem;

// import React from 'react';
// import '../style/modal.css';

// const Modal = ({ title, content, onClose }) => {
//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <div className="modal-header">
//           <h2>{title}</h2>
//           <button className="close-button" onClick={onClose}>X</button>
//         </div>
//         <div className="modal-content">
//           {content}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React, { useEffect } from 'react';
import '../style/modal.css';

const Modal = ({ title, content, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; 
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="modal-content">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;

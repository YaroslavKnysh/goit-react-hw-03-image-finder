import React from 'react';

const Button = ({ onNextPage }) => (
  <div className="loadButton-container">
    <button type="button" className="loadButton" onClick={onNextPage}>
      Load more
    </button>
  </div>
);

export default Button;

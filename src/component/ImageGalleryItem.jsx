import React from 'react';

const ImageGalleryItem = ({ imageSmall, onFullSize }) => (
  <li className="gallery-item">
    <img className="image" src={imageSmall} onClick={onFullSize} alt="" />
  </li>
);

export default ImageGalleryItem;

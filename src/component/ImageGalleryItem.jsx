import React from 'react';

const ImageGalleryItem = ({ imageSmall, onFullSize }) => (
  <li className="gallery-item">
    <img src={imageSmall} onClick={onFullSize} alt="" />
  </li>
);

export default ImageGalleryItem;

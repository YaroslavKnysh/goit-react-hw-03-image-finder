import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ imagesArr, onFullSize }) => (
  <ul className="gallery">
    {imagesArr.map(image => (
      <ImageGalleryItem
        imageSmall={image.webformatURL}
        imageLarge={image.largeImageURL}
        onFullSize={() => onFullSize(image.largeImageURL)}
        key={image.id}
      />
    ))}
  </ul>
);

export default ImageGallery;

import React, { Component } from 'react';
import ImageGalleryItem from './component/ImageGalleryItem';

class ImageGallery extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <ul className="gallery">
        {this.state.images.map(image => (
          <li className="gallery-item" key={image.id}>
            <ImageGalleryItem />
          </li>
        ))}
      </ul>
    );
  }
}
export default ImageGallery;

import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <img
        src={image.webformatURL}
        onClick={e => this.openFullSize(image.largeImageURL)}
        alt=""
      />
    );
  }
}

export default ImageGalleryItem;

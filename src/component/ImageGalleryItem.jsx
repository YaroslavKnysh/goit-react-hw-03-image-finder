import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.state.images.map(image => (
          <li className="gallery-item" key={image.id}>
            <img
              src={image.webformatURL}
              onClick={e => this.openFullSize(image.largeImageURL)}
              alt=""
            />
          </li>
        ))}
      </div>
    );
  }
}

export default ImageGalleryItem;

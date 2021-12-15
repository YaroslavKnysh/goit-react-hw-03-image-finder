import React, { Component } from 'react';
import './component/style.css';
import axios from 'axios';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
// import Searchbar from './component/Searchbar'
// import ImageGallery from './component/ImageGallery'
// import ImageGalleryItem from './component/ImageGalleryItem'
// import Loader from './component/Loader'
// import Button from './component/Button'
// import Modal from './component/Modal'

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      pageNumber: 1,
      searchQuery: '',
      isLoading: false,
      modalOpen: false,
      largeImage: '',
    };
    this.fetchImages = this.fetchImages.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.openFullSize = this.openFullSize.bind(this);
  }

  fetchImages() {
    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.pageNumber}&key=23926259-20170b2e8904d12034176c2be&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response =>
        this.setState({
          images: [...this.state.images, ...response.data.hits],
        }),
      )
      .finally(() => this.setState({ isLoading: false }));
  }
  handleChange(e) {
    this.setState({ searchQuery: e.target.value });
  }
  nextPage() {
    this.setState({ pageNumber: this.state.pageNumber + 1 }, e =>
      this.fetchImages(),
    );
  }
  openFullSize(largeImage) {
    this.setState({ modalOpen: true, largeImage });
  }
  render() {
    return (
      <div>
        <header className="searchbar">
          <form
            className="form"
            onSubmit={e => {
              e.preventDefault();
              this.setState({ images: [], pegeNumber: 1 }, e =>
                this.fetchImages(),
              );
            }}
          >
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
          </form>
        </header>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
        ;
        <ul className="gallery">
          {this.state.images.map(image => (
            <li className="gallery-item" key={image.id}>
              <img
                src={image.webformatURL}
                onClick={e => this.openFullSize(image.largeImageURL)}
                alt=""
              />
            </li>
          ))}

          {this.state.images.length > 0 && (
            <button
              type="button"
              className="loadButton"
              onClick={this.nextPage}
            >
              Load more
            </button>
          )}
        </ul>
        {this.state.modalOpen === true && (
          <div className="overlay">
            <div className="modal">
              <img src={this.state.largeImage} alt="" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;

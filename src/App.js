import React, { Component } from 'react';
import './component/style.css';
import axios from 'axios';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
// import Searchbar from './component/Searchbar';
// import ImageGallery from './component/ImageGallery';
// import Button from './component/Button';
// import Modal from './component/Modal';

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
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.code === 'Escape') {
      this.setState({ modalOpen: false });
    }
  }
  handleBackdropClick(e) {
    if (e.currentTarget === e.target) {
      this.setState({ modalOpen: false });
    }
  }
  fetchImages() {
    this.setState({ isLoading: true });
    setTimeout(() => {
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
    }, 1500);
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
        {/* <Searchbar /> */}
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
            <button type="submit" className="search-button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="search-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
          </form>
        </header>
        {this.state.isLoading && (
          <Loader
            className="loader"
            type="Puff"
            color="#00BFFF"
            height={300}
            width={300}
            timeout={3000} //3 secs
          />
        )}
        {/* <ImageGallery /> */}
        <ul className="gallery">
          {this.state.images.map(image => (
            <li className="gallery-item" key={image.id}>
              <img
                className="image"
                src={image.webformatURL}
                onClick={e => this.openFullSize(image.largeImageURL)}
                alt=""
              />
            </li>
          ))}
        </ul>
        {/* <Button /> */}
        <div className="loadButton-container">
          {this.state.images.length > 0 && (
            <button
              type="button"
              className="loadButton"
              onClick={this.nextPage}
            >
              Load more
            </button>
          )}
        </div>
        {/* <Modal /> */}
        {this.state.modalOpen === true && (
          <div className="overlay" onClick={this.handleBackdropClick}>
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

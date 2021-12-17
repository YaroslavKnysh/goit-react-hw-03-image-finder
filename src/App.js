import React, { Component } from 'react';
import './component/style.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import GetApi from './component/Services';
import Searchbar from './component/Searchbar';
import ImageGallery from './component/ImageGallery';
import Button from './component/Button';
import Modal from './component/Modal';

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
    setTimeout(() => {
      GetApi(this.state.searchQuery, this.state.pageNumber)
        .then(response =>
          this.setState({
            images: [...this.state.images, ...response.data.hits],
          }),
        )
        .finally(() => this.setState({ isLoading: false }));

      // axios
      //   .get(
      //     `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.pageNumber}&key=23926259-20170b2e8904d12034176c2be&image_type=photo&orientation=horizontal&per_page=12`,
      //   )
      //   .then(response =>
      //     this.setState({
      //       images: [...this.state.images, ...response.data.hits],
      //     }),
      //   )
      //   .finally(() => this.setState({ isLoading: false }));
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
        <Searchbar
          onSubmitForm={e => {
            e.preventDefault();
            this.setState({ images: [], pegeNumber: 1 }, e =>
              this.fetchImages(),
            );
          }}
          onSearchInput={this.handleChange}
        />
        {/* <header className="searchbar">
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
        </header> */}
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
        <ImageGallery
          imagesArr={this.state.images}
          onFullSize={this.openFullSize}
        />

        {/* <ul className="gallery">
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
        </ul> */}
        {this.state.images.length > 0 && <Button onNextPage={this.nextPage} />}
        {/* <div className="loadButton-container">
          {this.state.images.length > 0 && (
            <button
              type="button"
              className="loadButton"
              onClick={this.nextPage}
            >
              Load more
            </button>
          )}
        </div> */}

        {this.state.modalOpen === true && (
          <Modal
            onCloseModal={() => this.setState({ modalOpen: false })}
            largeImage={this.state.largeImage}
          />
        )}
      </div>
    );
  }
}

export default App;

import React, { Component }from 'react';

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
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
    );
  }
}

export default Searchbar;

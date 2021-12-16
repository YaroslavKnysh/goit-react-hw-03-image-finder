import React from 'react';

const Searchbar = ({ onSubmitForm, onSearchInput }) => (
  <header className="searchbar">
    <form className="form" onSubmit={onSubmitForm}>
      <button type="submit" className="search-button">
        <span className="button-label">Search</span>
      </button>

      <input
        className="search-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={onSearchInput}
      />
    </form>
  </header>
);

export default Searchbar;

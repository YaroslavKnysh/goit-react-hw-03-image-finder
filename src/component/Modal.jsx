import React, { Component } from 'react';

class Modal extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.code === 'Escape') {
      console.log('modal close');
      this.setState({ modalOpen: false });
    }
  }
  handleBackdropClick(e) {
    if (e.currentTarget === e.target) {
      this.setState({ modalOpen: false });
    }
  }
  render() {
    return (
      <div>
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

export default Modal;

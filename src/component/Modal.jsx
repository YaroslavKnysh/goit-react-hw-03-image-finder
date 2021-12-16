import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
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
      console.log('modal close');
      this.props.onCloseModal();
      // this.setState({ modalOpen: false });
    }
  }
  handleBackdropClick(e) {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
      // this.setState({ modalOpen: false });
    }
  }
  render() {
    return (
      <div className="overlay" onClick={this.handleBackdropClick}>
        <div className="modal">
          <img src={this.props.largeImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

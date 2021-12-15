import React, { Component } from 'react';

class Modal extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
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

export default Modal;

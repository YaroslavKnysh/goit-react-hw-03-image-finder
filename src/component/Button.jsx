import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.state.images.length > 0 && (
          <button type="button" className="loadButton" onClick={this.nextPage}>
            Load more
          </button>
        )}
      </div>
    );
  }
}
export default Button;

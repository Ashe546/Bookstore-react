import React, { Component } from 'react';

export default class Book extends Component {
  render() {
    return (
      <div>
        <h1>
          Books
          {this.props.name} 
        </h1>
        <button type="submit">Remove</button>
      </div>
    );
  }
}

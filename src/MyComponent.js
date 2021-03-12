import React, { Component } from 'react';

export default class MyComponent extends Component {
  // the initial state of the component
  state = {
    heading: 'React Awesomeness (busy)',
    content: 'Loading'
  };

  render() {
    const { heading, content } = this.state;

    return (
      <main>
        <h1>{heading}</h1>
        <p>{content}</p>
      </main>
    );
  }
}
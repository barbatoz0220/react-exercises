import React, { Component } from 'react';

export default class MyComponent extends Component {
  // the initial state of the component
  state = {
    first: false,
    second: true
  };

  render() {
    const { first, second } = this.state;

    return (
      <main>
        <section>
          <button disabled={first}>First</button>
        </section>
        <section>
          <button disabled={second}>Second</button>
        </section>
      </main>
    );
  }
}